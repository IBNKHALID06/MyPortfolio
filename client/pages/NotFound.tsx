import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center card-glass p-8 mx-4">
        <h1 className="text-5xl font-extrabold text-foreground text-glow-purple">404</h1>
        <p className="mt-3 text-foreground/90">Oops! Page not found</p>
        <a href="/" className="mt-5 inline-flex items-center rounded-lg bg-primary text-primary-foreground px-5 py-2 font-semibold hover:scale-[1.03] transition-transform">
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
