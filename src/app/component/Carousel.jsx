import CarouselTitle from "./CarouselTitle"

export default function Carousel () {
  return (
    <div className="w-full h-screen after:content-[''] after:absolute after:top-0 after:w-full after:h-full after:z-0 after:bg-black after:opacity-50">
      <img 
        src="/img/carousel.jpg"
        alt="image of headphone, tablet device, book, and pen on the table"
        className="w-full h-full" 
      />
      <CarouselTitle />
    </div>
  )
}