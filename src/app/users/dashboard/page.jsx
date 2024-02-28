import authUserSession from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()
    return(
        <div className="text-color-primary flex flex-col justify-center items-center mt-8">
            <h5 className="text-2xl font-bold mb-2">Welcome, {user.name}</h5>
            <figure className="overflow-hidden rounded-full">
            <Image src={user.image} width={200} height={200} alt="..." className="w-52 rounded-full"/>
            </figure>
            <div className="flex py-8 gap-4">
            <Link href="/users/dashboard/collection" className="bg-color-accent text-color-dark font-bold text-xl px-4 py-2 rounded hover:scale-105 transition">My Collection</Link>
            <Link href="/users/dashboard/comment" className="bg-color-accent text-color-dark font-bold text-xl px-4 py-2 rounded hover:scale-105 transition">My Comment</Link>
            </div>
        </div>
    )
}

export default Page