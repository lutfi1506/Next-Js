"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searRef = useRef()
    const router = useRouter()
    const handleSearch = (e) =>{
        const keyword = searRef.current.value
        if(!keyword || keyword.trim() == "") return
        if(e.key === 'Enter' || e.type === "click"){
            e.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }
    return(
        <div className="relative">
        <input placeholder="Cari Anime.." className="p-2 rounded w-full" ref={searRef} onKeyDown={handleSearch}/>
        <button className="absolute top-2 end-1" onClick={handleSearch} >
        <MagnifyingGlass size={24} />
        </button>
        </div>
    )
}

export default InputSearch