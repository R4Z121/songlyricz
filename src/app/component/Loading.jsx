export default function Loading ({show}) {
  return (
    <div className={`fixed top-0 left-0 w-full h-full after:fixed after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-40 after:z-40 ${show ? 'block' : 'hidden'}`}>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <p className="text-xl text-white">Please wait ...</p>
      </div>
    </div>
  )
}