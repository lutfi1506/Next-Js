import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex flex-col sm:flex-row md:items-center justify-between p-4">
                <Link href="/" className="font-bold  text-2xl">Cuy Anime List</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar