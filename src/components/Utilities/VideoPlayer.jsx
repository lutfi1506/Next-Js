"use client"
import { X } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"
const VideoPlayer = ({youtubeId}) => {
    const [isOpen,setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevstate) => !prevstate)
    }
    const option = {
        width: "300",
        height: "250"
    }
    const Player = () => {
        return(
        <div className="fixed bottom-2 right-2">
            <button className="text-color-primary float-right rounded bg-color-secondary mb-1" onClick={handleVideoPlayer}><X size={32} /></button>
            <YouTube 
            videoId={youtubeId}
            onReady={(e) => e.target.pauseVideo()}
            opts={option}
            onError={() => alert("maaf Video Error")}
            />
        </div>  
        )
    }

    return isOpen ? 
    <Player /> : 
    <button className="fixed bottom-5 right-5 w-32 text-color-dark bg-color-primary" onClick={handleVideoPlayer}>
        Tonton Trailernya
    </button>
}

export default VideoPlayer