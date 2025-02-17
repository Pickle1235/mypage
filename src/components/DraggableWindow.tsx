import '../css/DraggableWindow.css'
import React from "react";
import { useState, useRef } from "react";
import closeButton from '../assets/close.png';
import useWindowDimensions from '../utils/useWindowDimensions';
import { playHoverSound } from "../utils/soundPlayer";

export default function DraggableWindow({ onClickCloseWindow, windowContent, muted } : { onClickCloseWindow? : () => void, windowContent : boolean, muted : boolean }) {
  const { height, width } = useWindowDimensions();
  const [position, setPosition] = useState({ x: width / 2 - 100, y: height / 2 - 75});
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });


  function onHover() {
      if (!muted) {
          playHoverSound()
      }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }

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
    <div 
        className="window" 
        style={{
          left: position.x,
          top: position.y}}
    >
      <div className="drag-bar" onMouseDown={handleMouseDown}/>
      <img className="close-window-button" onMouseEnter={() => onHover()} onClick={onClickCloseWindow} src={closeButton}></img>
      <p>{windowContent}</p>
    </div>
  )
}