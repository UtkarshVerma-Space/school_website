import Image from "next/image"
import style from "./carousel.module.css"
export default function Carousel() {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2020-10/high%20tech%20classroom.png?itok=L17PtGC1" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/12/18/634048-physical-training.jpg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2020-10/high%20tech%20classroom.png?itok=L17PtGC1" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://mcmscache.epapr.in/post_images/website_350/post_29811255/full.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}
