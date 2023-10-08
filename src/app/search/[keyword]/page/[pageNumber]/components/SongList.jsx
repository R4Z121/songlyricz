"use client";
import { useEffect, useState } from "react";
import SongItem from "./SongItem";
import axios from "axios";

export default function SongList ({keyword,page}) {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://genius-song-lyrics1.p.rapidapi.com/search/',
      params: {
        q: keyword,
        per_page: '12',
        page: page
      },
      headers: {
        'X-RapidAPI-Key': '23c27277e8msh562052692ac9df2p12d122jsn829fe59935c5',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
    axios.request(options)
    .then(response => {
      setSearchData(response.data.hits);
      console.log("success fetching data !")
    })
    .catch(err => {
      setSearchData("");
      console.log(err);
    });
  },[])

  return (
    <div className="p-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center items-center min-h-full">
      {searchData ? searchData.map(data => (<SongItem info={data.result} key={data.result.id} />)) : (<p>{"Oops Something Went Wrong :("}</p>)}
    </div>
  )
}