import '../css/DraggableWindow.css'
import React from "react";
import { useState, useRef } from "react";

export default function DraggableWindow({ onClickCloseWindow, windowContent }: { onClickCloseWindow? : () => void, windowContent : boolean }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Handle Mouse Down
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  // Handle Mouse Move
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    })
  }

  // Handle Mouse Up
  const handleMouseUp = () => {
    setIsDragging(false);
  }

  // Attach/Remove Global Mouse Events
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging])

  return (
    <div className="window" style={{
        left: position.x,
        top: position.y}}>
      <div
        onMouseDown={handleMouseDown}
        style={{
          background: "#2980b9",
          padding: "5px",
          textAlign: "center",
          borderRadius: "5px",
        }}
      >
        Drag Me
      </div>
      <button className="close-window-button" onClick={onClickCloseWindow}>

      </button>
      <p>{windowContent}</p>
    </div>
  )
}