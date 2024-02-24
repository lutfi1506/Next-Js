import { getAnimeResponse } from "@/components/libs/api-list";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
const Page = async ({params}) => {
  const {keyword} = params;

  const decodekeyword = decodeURI(keyword)
  const SearchAnime = await getAnimeResponse("anime",`q=${decodekeyword}`)

  return (
    <>
    {/* Anime terpopuler */}
      <section>
      <Header title={`pencarian untuk ${decodekeyword}..`} linkTitle="Kembali" linkHref="/"/>
      <AnimeList api={SearchAnime} />
      </section>
    </>
  );
}

export default Page;