import React from "react";
import '../../css/RoundButton.css'
import { playHoverSound } from "../../utils/soundPlayer"; 

export default function RoundButton({ onClick, text, muted }: { onClick? : React.MouseEventHandler, text: string, muted: boolean }) {
    function onHover() {
        console.log('aa')
        if (!muted) {
            playHoverSound()
        }
    }
    return (
        <div className="round-button">
            <button className="button" onMouseEnter={() => onHover()} onClick={onClick}>{text}</button>
        </div>


    )
}