import React from "react";

export function handle_zoom_mouse_move(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  containerRef: React.RefObject<HTMLDivElement | null>
): void {
  if (!containerRef.current) return;
  
  const zoomer = containerRef.current;
  const bounds = zoomer.getBoundingClientRect();

  const x = ((e.clientX - bounds.left) / zoomer.offsetWidth) * 100;
  const y = ((e.clientY - bounds.top) / zoomer.offsetHeight) * 100;

  zoomer.style.backgroundPosition = `${x}% ${y}%`;
}
