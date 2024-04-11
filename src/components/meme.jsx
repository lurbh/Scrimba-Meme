import React, { useState } from "react";
import memesDataHandler from "../memedata.jsx"

export default function Meme() {
    const [topText, setTopText] = useState("");
    const [btmText, setBtmText] = useState("");
    const [memeurl, setMemeUrl] = useState("");

    const memesData = memesDataHandler.data.memes;

    const getMemeData= () => {
        const randomMeme = memesData[Math.floor(Math.random() * memesData.length)];
        const imgUrl = randomMeme.url;
        setMemeUrl(imgUrl);
    }

    return (
        <main>
            <div className="form">
                <div className="inputholder">
                    <label className="form--label" htmlFor="top-text">Top Text</label>
                    <input 
                        id="top-text"
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                        value={topText}
                        onChange={(e)=>{setTopText(e.target.value)}}
                    />
                </div>
                <div className="inputholder">
                    <label className="form--label" htmlFor="btm-text">Bottom Text</label>
                    <input 
                        id="btm-text"
                        type="text"
                        placeholder="and take my money"
                        className="form--input"
                        value={btmText}
                        onChange={(e)=>{setBtmText(e.target.value)}}
                    />
                </div>
                
                <button className="form--button" onClick={getMemeData} >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="image-holder">
                <img src={memeurl} className="memeimg" />
            </div>
        </main>
    )
}