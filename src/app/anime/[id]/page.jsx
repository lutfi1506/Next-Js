import { getAnimeResponse } from "@/libs/api-list"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async({params: {id}}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    return(
        <>
        <div className="px-4 pt-4">
            <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
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
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
            <Image 
            src={anime.data.images.webp.image_url}
            alt="..."
            width={250}
            height={250}
            className="w-full rounded object-cover"
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