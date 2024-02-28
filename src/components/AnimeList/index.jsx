import Image from "next/image";
import Link from "next/link";

const AnimeList = ({api}) =>{
    return(
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {api.data?.map((anime) => {
            return (
        <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} className="cursor-pointer text-color-primary transition-all hover:text-color-accent overflow-hidden">
            <Image src={anime.images.webp.image_url} alt=".." width={600} height={400}/>
            <h3 className="font-bold text-base  p-4 md:text-xl">{anime.title}</h3>
        </Link>
            )
        })}  
    </div>
    );
}
export default AnimeList; 