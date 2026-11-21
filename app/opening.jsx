"use client";

import { useEffect, useRef } from "react";

export default function Opening() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const points = [[31,173],[26,151],[30,115],[46,92],[77,80],[101,66],[120,40],[141,25],[168,24],[194,36],[224,46],[252,43],[275,40],[293,48],[313,60],[337,71],[359,79],[372,96],[380,120],[384,145],[378,174]];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    const start = performance.now();

    function paint(now) {
      const progress = motion.matches ? 1 : Math.min((now - start) / 1350, 1);
      const end = progress * (points.length - 1);
      context.clearRect(0, 0, 410, 195);
      context.beginPath();
      context.moveTo(...points[0]);

      for (let i = 1; i < points.length; i++) {
        const [x, y] = points[i];
        const [previousX, previousY] = points[i - 1];
        const step = Math.max(0, Math.min(1, end - i + 1));
        const midpointX = (previousX + x) / 2;
        const midpointY = (previousY + y) / 2;
        context.quadraticCurveTo(previousX, previousY, previousX + (midpointX - previousX) * step, previousY + (midpointY - previousY) * step);
        if (step < 1) break;
        if (i === points.length - 1) context.lineTo(x, y);
      }

      context.strokeStyle = "#f8f7ff";
      context.lineWidth = 1.35;
      context.shadowColor = "#d9d5ff";
      context.shadowBlur = 12;
      context.stroke();
      context.beginPath();
      context.arc(...points[0], 3.5, 0, Math.PI * 2);
      context.fillStyle = "#fff";
      context.fill();

      if (progress < 1) frame = requestAnimationFrame(paint);
    }

    frame = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="opening" id="opening" data-scroll-scene aria-label="Portfolio opening">
      <div className="signature">
        <canvas ref={canvasRef} width={410} height={195} aria-hidden="true" />
        <p>HUZAIFA</p>
      </div>
      <a className="enter" href="#portfolio">Enter portfolio</a>
    </section>
  );
}
