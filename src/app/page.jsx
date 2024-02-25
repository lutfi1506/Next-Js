import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduceData } from "@/libs/api-list";
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime","entry")
  recomendedAnime = reproduceData(recomendedAnime,8)
  return (
    <>
    {/* Anime terpopuler */}
      <section>
      <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
      <AnimeList api={topAnime} />
      </section>

      {/* Rekomendasi */}
      <section>
      <Header title="Rekomendasi Anime" linkTitle="Lihat Semua" linkHref="/rekomendasi"/>
      <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
}

export default Page;