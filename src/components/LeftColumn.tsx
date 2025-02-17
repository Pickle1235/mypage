import '../css/LeftColumn.css'
import { useState } from "react";
import '../fonts/eurostar.ttf'
import '../fonts/trump.ttf'


export default function LeftColumn( {muted} : { muted : boolean} ) {

        return (
            <div className="left-column">
                <div className="row">
                    <a className="eurostar blue-border white-text">■ NAME</a><br />
                    <a className="tabbed-tex trump blue-border white-text">Peter An</a>
                </div>
                <div className="row">
                    <a className="eurostar blue-border white-text">■ DEGREE</a><br />
                    <a className="tabbed-text trump blue-border white-text">Bachelor's Degree in Computer Science</a>
                </div>
                <div className="row">
                    <a className="eurostar blue-border white-text">■ PROFESSION</a><br />
                    <a className="tabbed-text trump blue-border white-text">Software Engineer</a>
                </div>
                <div className="row">
                    <a className="eurostar blue-border white-text">■ EMAIL</a><br />
                    <a href="mailto:peteran1236@gmail.com" className="tabbed-text no-hyperlink-style trump blue-border white-text">peteran1236@gmail.com</a>
                </div>
            </div>
            
    )
}