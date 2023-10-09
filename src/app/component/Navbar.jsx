import SearchBar from "./SearchBar"

export default function Navbar () {
  return (
    <div className="sm:bg-slate-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <div className="p-4 bg-slate-200">
        <a href="/" className=" text-xl font-bold w-fit">SongLyricZ</a>
      </div>
      <div className="p-4 w-full sm:max-w-sm">
        <SearchBar /> 
      </div>
    </div>
  )
}