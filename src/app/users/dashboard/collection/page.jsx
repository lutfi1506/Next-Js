import Header from "@/components/Dashboard/Header"
import authUserSession from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUserSession()
    const collection = await prisma.collection.findMany({where: {user_email:user.email}})
    return(
        <section className="mt-4 mx-5">
            <Header title="My Collection"/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collection.map(async(collect,index) => {
                return (
                    <Link href={`/anime/${collect.anime_mal_id}`} key={index} className="relative border-2 border-color-accent group overflow-hidden">
                        <h3 className="absolute flex bottom-0 w-full bg-color-accent h-16 z-50 text-color-dark text-2xl font-bold justify-center text-center items-center">{collect.anime_title}</h3>
                        <Image src={collect.anime_image} alt="..." className="" width={350} height={350}/>
                    </Link>
                )
            })}
            </div>
        </section>
    )
}

export default Page