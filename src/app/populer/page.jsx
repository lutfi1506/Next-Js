"use client"
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Paginate from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-list";
const Page = () => {
    const [page,setPage] = useState(1)
    const [topAnime,setTopAnime] = useState([])
    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("top/anime",`page=${page}`)
        setTopAnime(populerAnime)
    }
    
    useEffect(()=>{
        fetchData()
    },[page])
    
  return (
    <>
    {/* Anime terpopuler */}
      <section>
        <HeaderMenu title={`Anime Terpopuler #${page}`}/>
        <AnimeList api={topAnime} />
        <Paginate page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
      </section>
    </>
  );
}

export default Page;