"use client";
import { useEffect, useState } from "react"
import DataSource from "@/app/utils/DataSource";

export default function SongDetail ({songId}) {
  const [songImage, setSongImage] = useState("/img/carousel.jpg");
  const [songTitle, setSongTitle] = useState("{song Title}");
  const [songArtist, setSongArtist] = useState("{song Artist}");
  const [songAlbum, setSongAlbum] = useState("{song Album}");
  const [songReleaseDate, setSongReleaseDate] = useState("{song Release Date}");

  useEffect(() => {
    async function fetchData () {
      const songDetailData = await DataSource.getSongDetail(songId);
      if(songDetailData) {
        setSongImage(songDetailData.header_image_url);
        setSongTitle(songDetailData.title);
        setSongArtist(songDetailData.artist_names);
        setSongAlbum(songDetailData.album.name);
        setSongReleaseDate(songDetailData.release_date_for_display);
      }
    }
    fetchData();
  },[])

  return (
    <div className="flex flex-col p-2 pb-7 gap-3 bg-white rounded max-w-sm">
      <img src={songImage} alt="song thumbnail" className="w-full" />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-center">
          <p className="text-base font-bold">Title</p>
          <p>{songTitle}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-base font-bold">Artist</p>
          <p>{songArtist}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-base font-bold">Album</p>
          <p>{songAlbum}</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-base font-bold">Release Date</p>
          <p>{songReleaseDate}</p>
        </div>
      </div>
    </div>
  )
}