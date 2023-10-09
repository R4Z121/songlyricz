import SongDetail from "./SongDetail";
import SongLyrics from "./SongLyrics";

export default function SongContent ({songId}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:p-8 items-center gap-5 p-4">
      <SongDetail songId={songId} />
      <SongLyrics songId={songId} />
    </div>
  )
}