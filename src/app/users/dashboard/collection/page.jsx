import Header from "@/components/Dashboard/Header"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return(
        <section className="mt-4 mx-5">
            <Header title="My Collection"/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/" className="relative">
                <h3 className="absolute flex bottom-0 w-full bg-color-accent h-16 text-color-dark text-2xl font-bold justify-center items-center">Judul Anime</h3>
            <Image src="" alt="..." className="border-2 border-color-accent" width={350} height={350}/>
            </Link>
            <Link href="/" className="relative">
                <h3 className="absolute flex bottom-0 w-full bg-color-accent h-16 text-color-dark text-2xl font-bold justify-center items-center">Judul Anime</h3>
            <Image src="" alt="..." className="border-2 border-color-accent" width={350} height={350}/>
            </Link>
            <Link href="/" className="relative">
                <h3 className="absolute flex bottom-0 w-full bg-color-accent h-16 text-color-dark text-2xl font-bold justify-center items-center">Judul Anime</h3>
            <Image src="" alt="..." className="border-2 border-color-accent" width={350} height={350}/>
            </Link>
            <Link href="/" className="relative">
                <h3 className="absolute flex bottom-0 w-full bg-color-accent h-16 text-color-dark text-2xl font-bold justify-center items-center">Judul Anime</h3>
            <Image src="" alt="..." className="border-2 border-color-accent" width={350} height={350}/>
            </Link>
            </div>
        </section>
    )
}

export default Page