import { useEffect, useRef } from "react";

// Metaballs ("lava lamp") background - non-interactive, constant speed
export default function BackgroundFluid() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

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

      float metaball(vec2 uv, vec2 c, float r){
        float d = length(uv - c);
        return r*r/(d*d + 1e-3);
      }

      vec3 palette(float t) {
        vec3 a = vec3(0.36, 0.27, 0.80);
        vec3 b = vec3(0.90, 0.22, 0.80);
        return mix(a, b, smoothstep(0.0, 1.0, t));
      }

      void main(){
        vec2 uv = gl_FragCoord.xy / u_res.xy; // 0..1
        float aspect = u_res.x / u_res.y;
        vec2 uvA = vec2(uv.x*aspect, uv.y);

        float t = u_time * 0.5; // speed

        float f = 0.0;
        // 12 moving balls
        for (int i=0;i<12;i++){
          float fi = float(i);
          float a = t*0.6 + fi*0.5235987756; // ~30deg offset
          float r = 0.14 + 0.05*sin(t*0.9 + fi*0.7);
          vec2 c = vec2(
            0.5 + 0.40*cos(a + fi*0.37),
            0.5 + 0.33*sin(a*1.17 + fi*0.21)
          );
          vec2 cA = vec2(c.x*aspect, c.y);
          f += metaball(uvA, cA, r);
        }

        float iso = smoothstep(1.2, 1.6, f);
        float edge = smoothstep(1.6, 1.8, f) - smoothstep(1.8, 2.0, f);
        vec3 col = palette(iso) + vec3(edge)*0.25;

        // background gradient + vignette
        col = mix(vec3(0.06,0.06,0.08), col, iso + 0.35);
        float vig = smoothstep(0.95, 0.4, length(uv - 0.5));
        col *= mix(0.85, 1.0, vig);

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
    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    let start = performance.now();
    const tick = () => {
      const now = performance.now();
      const t = (now - start) / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf.current = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("resize", resize);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 w-full h-full"
      aria-hidden="true"
    />
  );
}
