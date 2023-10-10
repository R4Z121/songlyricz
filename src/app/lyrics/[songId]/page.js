"use client";
import Navbar from "@/app/component/Navbar";
import SongContent from "./component/SongContent";
import Loading from "@/app/component/Loading";
import { createContext, useState } from "react";

export const LoadingContext = createContext(null);

export default function LyricsPage ({params}) {
  const [loadingShow, setLoadingShow] = useState(true);

  return (
    <LoadingContext.Provider value={setLoadingShow} >
      <div className="flex flex-col bg-gray-300 min-h-screen pb-4">
        <Loading show={loadingShow} />
        <Navbar />
        <SongContent songId={params.songId} />
      </div>
    </LoadingContext.Provider>
  )
}