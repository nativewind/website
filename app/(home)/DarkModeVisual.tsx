"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function DarkModeVisual() {

  const drag = useRef<HTMLDivElement>(null);
  const maskRef1 = useRef<HTMLDivElement>(null);
  const maskRef2 = useRef<HTMLDivElement>(null);
  const dragbgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dx, setDX] = useState('50%');
  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const xPercent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    const percentStr = `${xPercent.toFixed(2)}%`;
    setDX(percentStr);
  };

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };


  useEffect(() => {
    if (!drag.current) return;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    drag.current.addEventListener("mousedown", handleMouseDown);
    drag.current.addEventListener("touchstart", handleTouchStart, { passive: false });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      drag.current?.removeEventListener("mousedown", handleMouseDown);
      drag.current?.removeEventListener("touchstart", handleTouchStart);
    };
  }, [drag.current, containerRef.current, isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full -z-20"
      onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <div
        ref={maskRef1}
        id="drag"
        className="flex flex-col justify-end p-4 gap-4 w-full h-full bg-neutral-900/50 group-hover:bg-neutral-900 max-md:bg-neutral-900 pt-8 duration-300 transition-colors"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 50%, red 50%)",
          WebkitMaskSize: "200% 100%",
          WebkitMaskPosition: `-${dx} 0%`,
        }}
      >
        <div className="group-hover:bg-cyan-500/30 bg-cyan-400/3 border border-dashed group-hover:border-cyan-400/20 max-md:border-cyan-400/20 duration-300 rounded-full w-10 h-10" />
        <div className="group-hover:bg-cyan-500/20 bg-cyan-400/2 border border-dashed group-hover:border-cyan-400/20 max-md:border-cyan-400/20 duration-300 rounded-xl p-4 w-full h-[69%]" />
        <div className="flex gap-4 justify-end">
          <div className="bg-black/5 group-hover:bg-cyan-500/15 dark:bg-cyan-400/5 border border-dashed group-hover:border-cyan-400/20 max-md:border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
          <div className="bg-black/5 group-hover:bg-cyan-500/15 dark:bg-cyan-400/5 border border-dashed group-hover:border-cyan-400/20 max-md:border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
        </div>
      </div>

      <div
        ref={dragbgRef}
        className="absolute left-1/2 top-1/2 -translate-1/2 w-8 h-8 animate-ping rounded-full bg-fd-primary z-10"
        style={{
          left: dx,
        }}
      />
      <div
        ref={drag}
        className="absolute top-1/2 left-1/2 -translate-1/2 h-8 w-8 flex justify-center items-center rounded-full bg-fd-primary text-fd-foreground z-20"
        style={{
          left: dx,
        }}
      >
        <ChevronLeft className="w-8 h-8 text-neutral-900/80 group-hover:text-neutral-900" />
        <ChevronRight className="w-8 h-8 text-neutral-100/80 group-hover:text-neutral-100" />
      </div>

      <div
        ref={maskRef2}
        className="flex flex-col justify-end p-4 gap-4 w-full h-full bg-neutral-100/50 group-hover:bg-neutral-100 absolute inset-0 duration-300 transition-colors pt-8 max-md:bg-neutral-100"
        style={{
          WebkitMaskImage: "linear-gradient(to right, red 50%, transparent 50%)",
          WebkitMaskSize: "200% 100%",
          WebkitMaskPosition: `-${dx} 0%`,  
        }}
      >
        <div className="group-hover:bg-cyan-500/30 bg-black/5 border border-dashed group-hover:border-cyan-400/20 max-md:border-cyan-400/20 duration-300 rounded-full w-10 h-10" />
        <div className="bg-black/5 group-hover:bg-cyan-500/20 border border-dashed group-hover:border-cyan-400/20 max-md:border-cyan-400/20 duration-300 rounded-xl p-4 w-full h-[69%]" />
        <div className="flex gap-4 justify-end">
          <div className="bg-black/5 group-hover:bg-cyan-500/15 border border-dashed group-hover:border-cyan-400/20 max-md:border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
          <div className="bg-black/5 group-hover:bg-cyan-500/15 border border-dashed group-hover:border-cyan-400/20 max-md:border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
        </div>
      </div>
    </div>
  );
}