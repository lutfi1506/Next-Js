import { getAnimeResponse } from "@/libs/api-list"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import ColectionButton from "@/components/AnimeList/CollectionButton"
import authUserSession from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async({params: {id}}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: {user_email: user?.email,anime_mal_id:id}
    })
    return(
        <>
        <div className="px-4 pt-4">
            <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
            {!collection && user &&
            <ColectionButton anime_mal_id={id}  user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />
            }
        </div>
        <div className="px-4 pt-4 flex gap-2 text-color-primary overflow-x-auto">
            <div className="w-36 flex flex-col justify-center items-center border border-r-color-primary p-2">
            <h3>Peringkat</h3>
            <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center border border-r-color-primary p-2">
            <h3>Skor</h3>
            <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center border border-r-color-primary p-2">
            <h3>Anggota</h3>
            <p>{anime.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center border border-r-color-primary p-2">
            <h3>Episode</h3>
            <p>{anime.data.episodes}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center border border-r-color-primary p-2">
            <h3>Source</h3>
            <p>{anime.data.source}</p>
            </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 overflow-hidden text-color-primary">
            <Image 
            src={anime.data.images.webp.image_url}
            alt="..."
            width={250}
            height={250}
            className="w-full rounded"
            />
            <p className="text-justify md:text-xl">{anime.data.synopsis}</p>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
        </>
    )
}

export default Page