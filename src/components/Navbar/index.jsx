import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex flex-col-reverse sm:flex-row gap-2 md:items-center justify-between p-4">
                <Link href="/" className="font-bold  text-2xl">Cuy Anime List</Link>
                <InputSearch />
                <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar