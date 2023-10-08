'use client';
import { useState } from "react"

export default function SearchBar () {
  const [searchLink, setSearchLink] = useState("/");

  const onInputChange = e => {
    const insertedKeyword = e.target.value;
    const formattedKeyword = insertedKeyword.replaceAll(' ','+');
    setSearchLink(`/search/${formattedKeyword}/page/1`);
  }

  return (
    <form className="flex items-center gap-3 bg-white p-1 w-full max-w-xl rounded" action={searchLink}>
      <button type="submit"><img src="/icons/search.svg" alt="search logo" /></button>
      <input type="text" placeholder="song title" className="bg-transparent outline-none text-black text-sm sm:text-lg w-full" onChange={onInputChange} />
    </form>
  )
}