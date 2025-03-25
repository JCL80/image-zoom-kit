"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { handle_zoom_mouse_move } from "../utils/hoverMouseMove";

export interface MouseMoveViewerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function MouseMoveViewer({
  src,
  alt,
  width,
  height,
}: MouseMoveViewerProps) {
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="container-zoom"
      ref={divRef}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "200%",
        position: "relative",
        overflow: "hidden",
        cursor: "zoom-in",
      }}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handle_zoom_mouse_move(e, divRef)
      }
    >
      <Image
        src={src}
        width={width}
        height={height}
        style={{ transition: "0.5s" }}
        alt={alt}
      />
    </div>
  );
}
