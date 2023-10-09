import Navbar from "@/app/component/Navbar";
import SongContent from "./component/SongContent";

export default function LyricsPage ({params}) {
  return (
    <div className="flex flex-col bg-gray-300 min-h-screen pb-4">
      <Navbar />
      <SongContent songId={params.songId} />
    </div>
  )
}