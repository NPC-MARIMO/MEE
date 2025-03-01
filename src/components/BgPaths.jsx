import { useEffect, useRef } from "react";
import gsap from "gsap";

function FloatingPaths({ position }) {
  const pathsRef = useRef([]);

  useEffect(() => {
    pathsRef.current.forEach((path, index) => {
      gsap.fromTo(
        path,
        { strokeDasharray: "1, 100", strokeDashoffset: "100" },
        {
          strokeDashoffset: "0",
          strokeDasharray: "100, 100",
          duration: 20 + Math.random() * 10,
          repeat: -1,
          ease: "linear",
        }
      );
    });
  }, []);

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path, index) => (
          <path
            key={path.id}
            ref={(el) => (pathsRef.current[index] = el)}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths({ title = "Background Paths" }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
    </div>
  );
}
