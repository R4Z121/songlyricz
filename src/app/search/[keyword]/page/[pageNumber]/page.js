import SearchBar from "@/app/component/SearchBar";
import SongList from "./components/SongList";
import Pagination from "./components/Pagination";

export default function SearchPage ({ params }) {
  const keyword = unescape(params.keyword).replaceAll('+',' ');

  return (
    <div className="flex flex-col bg-gray-300 min-h-screen pb-4">
      <div className="sm:bg-slate-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <div className="p-4 bg-slate-200">
          <a href="/" className=" text-xl font-bold w-fit">SongLyricZ</a>
        </div>
        <div className="p-4 w-full sm:max-w-sm">
          <SearchBar /> 
        </div>
      </div>
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