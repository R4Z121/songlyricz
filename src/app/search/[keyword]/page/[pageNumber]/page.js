import Navbar from "@/app/component/Navbar";
import SongList from "./components/SongList";
import Pagination from "./components/Pagination";

export default function SearchPage ({ params }) {
  const keyword = unescape(params.keyword).replaceAll('+',' ');

  return (
    <div className="flex flex-col bg-gray-300 min-h-screen pb-4">
      <Navbar />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl">Search Result : <i>{keyword}</i></h1>
          <hr className="bg-slate-400 p-px rounded" />
        </div>
        <SongList keyword={keyword} page={params.pageNumber} />
      </div>
      <Pagination currentPageNumber={params.pageNumber} searchKeyword={unescape(params.keyword)} prev={(params.pageNumber == "1") ? false : true}/>
    </div>
  )
}