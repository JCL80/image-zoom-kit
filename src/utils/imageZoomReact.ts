import React from "react";

export function imageZoomReact(
  imgRef: React.RefObject<HTMLImageElement | null>,
  lensRef: React.RefObject<HTMLDivElement | null>,
  resultRef: React.RefObject<HTMLDivElement | null>
): void {
  if (!imgRef.current || !lensRef.current || !resultRef.current) return;

  const cx = resultRef.current.offsetWidth / lensRef.current.offsetWidth;
  const cy = resultRef.current.offsetHeight / lensRef.current.offsetHeight;
  
  resultRef.current.style.backgroundImage = `url('${imgRef.current.src}')`;
  resultRef.current.style.backgroundSize = `${imgRef.current.width * cx}px ${imgRef.current.height * cy}px`;

  function getCursorPos(e: MouseEvent): { x: number; y: number } {
    if (!imgRef.current) return { x: 0, y: 0 };
    const a = imgRef.current.getBoundingClientRect();
    let x = e.pageX - a.left - window.pageXOffset;
    let y = e.pageY - a.top - window.pageYOffset;
    return { x, y };
  }

  function moveLens(e: MouseEvent): void {
    if (!imgRef.current || !lensRef.current || !resultRef.current) return;
    const pos = getCursorPos(e);
    let x = pos.x - lensRef.current.offsetWidth / 2;
    let y = pos.y - lensRef.current.offsetHeight / 2;

    if (x > imgRef.current.offsetWidth - lensRef.current.offsetWidth) {
      x = imgRef.current.offsetWidth - lensRef.current.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > imgRef.current.offsetHeight - lensRef.current.offsetHeight) {
      y = imgRef.current.offsetHeight - lensRef.current.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }

    lensRef.current.style.left = `${x}px`;
    lensRef.current.style.top = `${y}px`;
    resultRef.current.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
  }

  lensRef.current.addEventListener("mousemove", moveLens);
  imgRef.current.addEventListener("mousemove", moveLens);
}
