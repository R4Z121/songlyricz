import SearchBar from "./SearchBar"

export default function CarouselTitle () {
  return (
    <div className="absolute top-0 w-full h-full z-10 flex flex-col gap-4 sm:gap-6 justify-center items-center p-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">Find Your Favourite Song Lyrics Here</h1>
      <SearchBar />
    </div>
  )
}