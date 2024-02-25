"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter()

    const handleback = (event) => {
        event.preventDefault()
        router.back()
    }
    return (
        <div className="mb-3 flex justify-between">
            <span className="text-color-primary cursor-pointer" onClick={handleback}><ArrowSquareLeft size={32}/></span>
            <h3 className=" text-2xl text-color-primary font-bold">{title}</h3>
        </div>
    )
}

export default Header