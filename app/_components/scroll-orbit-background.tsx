"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { getScrollProgress } from "../_lib/scroll-progress";

export function ScrollOrbitBackground() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      setProgress(
        getScrollProgress(
          document.documentElement.scrollHeight,
          window.innerHeight,
          window.scrollY,
        ),
      );
    };

    const onScroll = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="scroll-orbit-bg pointer-events-none absolute inset-0 overflow-hidden"
      style={{ "--scroll-progress": progress } as CSSProperties}
    >
      <div className="scroll-orbit scroll-orbit-a" />
      <div className="scroll-orbit scroll-orbit-b" />
      <div className="scroll-orbit scroll-orbit-c" />
      <div className="scroll-orbit-node scroll-orbit-node-a" />
      <div className="scroll-orbit-node scroll-orbit-node-b" />
      <div className="scroll-orbit-node scroll-orbit-node-c" />
      <div className="scroll-orbit-grid" />
    </div>
  );
}
