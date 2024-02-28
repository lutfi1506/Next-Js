"use client"

import { useState } from "react"

const ColectionButton = ({anime_mal_id, user_email,anime_image,anime_title}) => {
    const [isCreated,setIsCreated] = useState(false)
    const handleCollection = async(event) => {
        event.preventDefault()

        const data = {anime_mal_id,user_email,anime_image,anime_title}
        const response = await fetch("/api/v1/collection",{
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if(collection.isCreated) {
            setIsCreated(collection.isCreated)
        }
    }
    return(
        <>
            {isCreated 
            ? 
            <p className="text-color-primary">Added to favorite</p> 
            :
            <button onClick={handleCollection} className="py-1 px-2 rounded bg-color-accent hover:scale-105 transition-all">Add Favorite</button>
            }
        </>
    )
}

export default ColectionButton