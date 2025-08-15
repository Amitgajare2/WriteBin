import React from 'react'
import './home.css'

function Home() {
    return (
        <>
            <div className="grid-bg"></div>
            <div className="main">
                <div className="home-page">
                    <div className="head">
                        <h1>WriteBin</h1>
                        <h4>Paste it. Share it. Keep it <strong>forever</strong>.</h4>
                        <p>Writebin is a simple secure pastebin alternative powered by Appwrite. share code snippets, notes and text instantly</p>
                    </div>
                    <div className="btn">
                        <button className="button">
                            <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                            Explore
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home