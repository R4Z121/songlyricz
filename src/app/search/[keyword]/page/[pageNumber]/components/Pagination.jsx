export default function Pagination ({currentPageNumber, searchKeyword, prev}) {
  return (
    <div className="flex justify-center p-1">
      <div className="flex justify-center shadow-app-pagination-shadow">
        <button className="bg-white border-r border-slate-400">
          {prev ? 
            <a className="w-full h-full flex justify-center items-center p-2 pl-4 pr-4" href={`/search/${searchKeyword}/page/${currentPageNumber - 1}`}>
              <img src="/icons/arrowLeft.svg" alt="arrow left icons" />
            </a> : 
            <a className="w-full h-full flex justify-center items-center p-2 pl-4 pr-4">
              <img src="/icons/arrowLeft.svg" alt="arrow left icons" />
            </a>}
        </button>
        <div className="flex justify-center items-center p-2 pl-8 pr-7 bg-white border-r border-slate-400">
          <p className="text-lg">{currentPageNumber}</p>
        </div>
        <button className="bg-white">
          <a className="w-full h-full flex justify-center items-center p-2 pl-4 pr-4" href={`/search/${searchKeyword}/page/${Number(currentPageNumber) + 1}`}><img src="/icons/arrowRight.svg" alt="arrow right icons" /></a>
        </button>
      </div>
    </div>
  )
}