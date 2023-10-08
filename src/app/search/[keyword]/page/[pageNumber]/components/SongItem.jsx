export default function SongItem ({info}) {
  return (
    <a href={`/lyrics/${info.id}`} className="rounded w-full max-w-xs h-64 overflow-hidden relative hover:shadow-app-card-shadow hover:cursor-pointer transition-shadow">
      <img className="w-full h-full" src={info.header_image_thumbnail_url} />
      <div className="absolute bottom-0 w-full after:content-[''] after:absolute after:top-0 after:w-full after:h-full after:bg-black after:opacity-40 after:z-0 text-white">
        <div className="flex flex-col justify-center items-center p-3 relative z-20">
          <p className="text-center text-base">{info.full_title}</p>
          <p>{info.artist_names}</p>
        </div>
      </div>
    </a>
  )
}