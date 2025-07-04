import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  age: number;
}

export function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationIdRef = useRef<number>();
  const lastMouseTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      lastMouseTimeRef.current = now;

      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
      });

      // Limit the number of points
      if (pointsRef.current.length > 20) {
        pointsRef.current.shift();
      }
    };

    const animate = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Remove old points and update ages
      pointsRef.current = pointsRef.current.filter((point) => {
        point.age += 1;
        return point.age < 30;
      });

      // If mouse hasn't moved for 500ms, start fading out faster
      const timeSinceLastMove = now - lastMouseTimeRef.current;
      if (timeSinceLastMove > 500) {
        pointsRef.current = pointsRef.current.filter((point) => point.age < 10);
      }

      if (pointsRef.current.length > 1) {
        // Draw the trail
        for (let i = 0; i < pointsRef.current.length - 1; i++) {
          const point = pointsRef.current[i];
          const nextPoint = pointsRef.current[i + 1];

          const opacity = 1 - point.age / 30;
          const size = 3 - point.age / 15;

          // Create gradient colors cycling through blue, cyan, purple, pink
          const hue = (point.age * 8) % 360;
          const saturation = 80;
          const lightness = 60;

          ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
          ctx.lineWidth = Math.max(size, 0.5);
          ctx.lineCap = "round";

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
