"use client";
import Navbar from "@/app/component/Navbar";
import SongList from "./components/SongList";
import Pagination from "./components/Pagination";
import Loading from "@/app/component/Loading";
import { createContext, useState } from "react";

export const LoadingContext = createContext(null);

export default function SearchPage ({ params }) {
  const [loadingShow, setLoadingShow] = useState(true);

  const keyword = unescape(params.keyword).replaceAll('+',' ');

  return (
    <LoadingContext.Provider value={setLoadingShow} >
      <div className="flex flex-col bg-gray-300 min-h-screen justify-between pb-4">
        <Loading show={loadingShow} />
        <div className="flex flex-col">
          <Navbar />
          <div className="p-4 flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl md:text-2xl lg:text-3xl">Search Result : <i>{keyword}</i></h1>
              <hr className="bg-slate-400 p-px rounded" />
            </div>
            <SongList keyword={keyword} page={params.pageNumber} />
          </div>
        </div>
        <Pagination currentPageNumber={params.pageNumber} searchKeyword={unescape(params.keyword)} prev={(params.pageNumber == "1") ? false : true}/>
      </div>
    </LoadingContext.Provider>
  )
}