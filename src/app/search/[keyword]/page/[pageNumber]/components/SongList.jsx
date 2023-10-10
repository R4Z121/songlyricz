"use client";
import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../page";
import SongItem from "./SongItem";
import DataSource from "@/app/utils/DataSource";

export default function SongList ({keyword,page}) {
  const [searchData, setSearchData] = useState([]);
  const setLoadingShow = useContext(LoadingContext);

  useEffect(() => {
    async function fetchData() {
      const searchResult = await DataSource.getSongList(keyword,page);
      setSearchData(searchResult);
      setLoadingShow(false);
    }
    fetchData();
  },[])

  return (
    <div className="p-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center items-center">
      {searchData ? searchData.map(data => (<SongItem info={data.result} key={data.result.id} />)) : (<p>{"Oops Something Went Wrong :("}</p>)}
    </div>
  )
}