import { Swiper, SwiperSlide } from 'swiper/react'
import './carousel.css'
import Slide1 from '../../../public/slide-1.jpg'
import Slide2 from '../../../public/slide-2.jpg'
import Slide3 from '../../../public/slide-3.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Carousel = () => {
  return (
    <div id="hero" className=" carousel w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        className="rounded-xl shadow-lg w-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-screen ">
            <img
              src={Slide1}
              alt="Nature"
              className="w-full  object-cover z-10 h-full"
            />
            <div className="absolute inset-0 flex flex-col bg-[#000d] bg-opacity-90 text-white bg-opacity-50">
              <div className="w-[450px] box__carusel">
                <h2 data-aos="fade-down" className="text-5xl font-bold mb-4">
                  Nashr uchun joy, o'sish uchun joy!
                </h2>
                <p data-aos="fade-up" className="text-lg mb-6">
                  O‘zbekistonda va jahonda innovatsiyalar ombori.
                </p>
                <button
                  data-aos="fade-up"
                  className="bg-red-500 hover:bg-red-400 carusel__btn text-white font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300"
                >
                  Batafsil ma'lumot oling
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src={Slide2}
              alt="Nature"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex flex-col bg-[#000d] bg-opacity-90 text-white bg-opacity-50">
              <div className="w-[450px] box__carusel">
                <h2 data-aos="fade-down" className="text-5xl font-bold mb-4">
                  Nashr uchun joy, o'sish uchun joy!
                </h2>
                <p data-aos="fade-up" className="text-lg mb-6">
                  O‘zbekistonda va jahonda innovatsiyalar ombori.
                </p>
                <button
                  data-aos="fade-up"
                  className="bg-red-500 hover:bg-red-400 carusel__btn text-white font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300"
                >
                  Batafsil ma'lumot oling
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen">
            <img
              src={Slide3}
              alt="Technology"
              className="w-full object-cover h-full"
            />
            <div className="absolute inset-0 flex flex-col bg-[#000d] bg-opacity-90 text-white bg-opacity-50">
              <div className="w-[450px] box__carusel">
                <h2 data-aos="fade-down" className="text-5xl font-bold mb-4">
                  Nashr uchun joy, o'sish uchun joy!
                </h2>
                <p className="text-lg mb-6">
                  O‘zbekistonda va jahonda innovatsiyalar ombori.
                </p>
                <button className="bg-red-500 hover:bg-red-400 carusel__btn text-white font-bold py-3 px-10 rounded-lg shadow-lg transition duration-300">
                  Batafsil ma'lumot oling
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
