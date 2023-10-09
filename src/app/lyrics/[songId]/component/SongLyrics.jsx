"use client";
import { useEffect, useState } from "react"
import axios from "axios";


export default function SongLyrics ({songId}) {
  const [songLyrics, setSongLyrics] = useState("");

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/',
      params: {id: songId},
      headers: {
        'X-RapidAPI-Key': '23c27277e8msh562052692ac9df2p12d122jsn829fe59935c5',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
    
    axios.request(options)
    .then(res => {
      const lyrics = res.data.lyrics.lyrics.body.html;
      setSongLyrics(lyrics);
    })
    .catch(err => {
      console.log(err);
    })
  },[])

  return (
    <div className="p-3 flex flex-col gap-3 items-center w-full text-center" dangerouslySetInnerHTML={{ __html: songLyrics }}></div>
  )
}