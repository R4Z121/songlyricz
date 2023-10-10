"use client";
import { useEffect, useState, useContext } from "react"
import { LoadingContext } from "../page";
import DataSource from "@/app/utils/DataSource";

export default function SongLyrics ({songId}) {
  const [songLyrics, setSongLyrics] = useState("");
  const setLoadingShow = useContext(LoadingContext);

  useEffect(() => {
    async function fetchData() {
      const lyrics = await DataSource.getSongLyrics(songId);
      setSongLyrics(lyrics);
      setLoadingShow(false);
    }
    fetchData();
  },[])

  return (
    <div className="p-3 flex flex-col gap-3 items-center w-full text-center" dangerouslySetInnerHTML={{ __html: songLyrics }}></div>
  )
}