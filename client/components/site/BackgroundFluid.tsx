import { useEffect, useRef } from "react";

export default function BackgroundFluid() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const vsrc = `
      attribute vec2 a_pos;
      void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
    `;

    const fsrc = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;
      uniform vec2 u_mouse;

      // hash by IQ
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
      float noise(in vec2 p){
        vec2 i = floor(p); vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0,0.0));
        float c = hash(i + vec2(0.0,1.0));
        float d = hash(i + vec2(1.0,1.0));
        vec2 u = f*f*(3.0-2.0*f);
        return mix(a, b, u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
      }

      vec3 palette(float t) {
        // violet -> fuchsia gradient
        vec3 a = vec3(0.36, 0.27, 0.80);
        vec3 b = vec3(0.90, 0.22, 0.80);
        vec3 c = vec3(0.30, 0.60, 1.00);
        return mix(a, b, smoothstep(0.2, 0.8, t)) + 0.08*c;
      }

      void main(){
        vec2 uv = (gl_FragCoord.xy / u_res.xy);
        vec2 p = uv * 3.0;
        float t = u_time * 0.15;

        // mouse influence
        vec2 m = (u_mouse - 0.5) * 2.0;
        p += m * 0.6;

        float n = 0.0;
        float amp = 0.5;
        float freq = 1.0;
        for(int i=0;i<4;i++){
          n += amp * noise(p * freq + t);
          freq *= 2.0; amp *= 0.55;
        }
        n = smoothstep(0.2, 0.85, n);
        vec3 col = palette(n);

        // subtle vignette
        float vig = smoothstep(0.8, 0.1, length(uv - 0.5));
        col *= mix(0.8, 1.0, vig);

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
      }
      return sh;
    };

    const vert = compile(gl.VERTEX_SHADER, vsrc);
    const frag = compile(gl.FRAGMENT_SHADER, fsrc);
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    const verts = new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);

    let start = performance.now();
    const tick = () => {
      const now = performance.now();
      const t = (now - start) / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mouse.current.x, mouse.current.y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf.current = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("resize", resize);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 w-full h-full opacity-70"
      aria-hidden="true"
    />
  );
}
