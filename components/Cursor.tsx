"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = cursorRef.current;
    const r = ringRef.current;
    if (!c || !r) return;

    const onMove = (e: MouseEvent) => {
      c.style.left = e.clientX + "px";
      c.style.top  = e.clientY + "px";
      r.style.left = e.clientX + "px";
      r.style.top  = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);

    document.querySelectorAll("a,button,.hoverable").forEach((el) => {
      el.addEventListener("mouseenter", () => { c.classList.add("big"); r.classList.add("big"); });
      el.addEventListener("mouseleave", () => { c.classList.remove("big"); r.classList.remove("big"); });
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={ringRef}   className="cursor-ring hidden md:block" />
    </>
  );
}
