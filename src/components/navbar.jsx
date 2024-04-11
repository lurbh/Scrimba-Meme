import React from "react";
import memeface from "../assets/troll-face.png"
import '../assets/style.css'

export default function Navbar() {


    return (
        (
            <header className="header">
                <img 
                    src={memeface}
                    className="header--image"
                />
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">React Course - Project 3</h4>
            </header>
        )
    )
}