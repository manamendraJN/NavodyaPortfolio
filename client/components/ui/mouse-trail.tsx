import { useEffect, useRef } from "react";

export function MouseTrail() {
  const bubbleCursorRef = useRef<any>(null);

  useEffect(() => {
    const bubbleCursor = (options?: {
      element?: HTMLElement;
      zIndex?: number;
    }) => {
      const hasWrapperEl = options && options.element;
      const element = hasWrapperEl || document.body;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cursor = { x: width / 2, y: height / 2 };
      const particles: any[] = [];
      let canvas: HTMLCanvasElement, context: CanvasRenderingContext2D | null, animationFrame: number;

      function init() {
        canvas = document.createElement("canvas");
        context = canvas.getContext("2d");
        if (!context) return;

        canvas.style.top = "0px";
        canvas.style.left = "0px";
        canvas.style.pointerEvents = "none";
        canvas.style.zIndex = (options?.zIndex || 9999999999).toString();
        canvas.style.position = hasWrapperEl ? "absolute" : "fixed";

        element.appendChild(canvas);
        canvas.width = hasWrapperEl ? element.clientWidth : width;
        canvas.height = hasWrapperEl ? element.clientHeight : height;

        bindEvents();
        loop();
      }

      function bindEvents() {
        element.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onWindowResize);
      }

      function onWindowResize() {
        canvas.width = hasWrapperEl ? element.clientWidth : window.innerWidth;
        canvas.height = hasWrapperEl ? element.clientHeight : window.innerHeight;
      }

      function onMouseMove(e: MouseEvent) {
        cursor.x = hasWrapperEl ? e.clientX - element.getBoundingClientRect().left : e.clientX;
        cursor.y = hasWrapperEl ? e.clientY - element.getBoundingClientRect().top : e.clientY;
        addParticle(cursor.x, cursor.y);
      }

      function addParticle(x: number, y: number) {
        particles.push(new Particle(x, y));
      }

      function updateParticles() {
        if (!context) return;
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update(context);
        }
        for (let i = particles.length - 1; i >= 0; i--) {
          if (particles[i].lifeSpan <= 0) particles.splice(i, 1);
        }
      }

      function loop() {
        updateParticles();
        animationFrame = requestAnimationFrame(loop);
      }

      function destroy() {
        canvas.remove();
        cancelAnimationFrame(animationFrame);
        element.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onWindowResize);
      }

      function Particle(x: number, y: number) {
        this.position = { x, y };
        this.velocity = {
          x: (Math.random() - 0.5) * 1,
          y: -Math.random() * 0.7 - 0.5
        };
        this.radius = Math.random() * 6 + 4;
        this.opacity = 1;
        this.lifeSpan = 100;

        this.update = function (ctx: CanvasRenderingContext2D) {
          this.position.x += this.velocity.x;
          this.position.y += this.velocity.y;
          this.lifeSpan--;
          this.opacity = this.lifeSpan / 100;

          const gradient = ctx.createRadialGradient(
            this.position.x,
            this.position.y,
            0,
            this.position.x,
            this.position.y,
            this.radius
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
          gradient.addColorStop(0.5, `rgba(173, 216, 230, ${this.opacity * 0.6})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

          ctx.beginPath();
          ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.closePath();
        };
      }

      init();
      return { destroy };
    };

    bubbleCursorRef.current = bubbleCursor();
    return () => bubbleCursorRef.current?.destroy();
  }, []);

  return null;
}
