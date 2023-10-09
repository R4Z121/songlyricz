"use client";
import axios from "axios"
import { useEffect, useState } from "react"

export default function SongDetail ({songId}) {
  const [songImage, setSongImage] = useState("/img/carousel.jpg");
  const [songTitle, setSongTitle] = useState("{song Title}");
  const [songArtist, setSongArtist] = useState("{song Artist}");
  const [songAlbum, setSongAlbum] = useState("{song Album}");
  const [songReleaseDate, setSongReleaseDate] = useState("{song Release Date}");

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://genius-song-lyrics1.p.rapidapi.com/song/details/',
      params: {id: songId},
      headers: {
        'X-RapidAPI-Key': '23c27277e8msh562052692ac9df2p12d122jsn829fe59935c5',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
    axios.request(options)
    .then(res => {
      const songDetailData = res.data.song;
      setSongImage(songDetailData.header_image_url);
      setSongTitle(songDetailData.title);
      setSongArtist(songDetailData.artist_names);
      setSongAlbum(songDetailData.album.name);
      setSongReleaseDate(songDetailData.release_date_for_display)
    })
    .catch(err => {
      console.log(err);
    })
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