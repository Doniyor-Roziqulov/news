import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const Text = () => {
  const [swiperRef, setSwiperRef] = useState(null)

  let appendNumber = 4
  let prependNumber = 1

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ])
  }

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    )
  }

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    )
  }

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ])
  }
  return (
    <div className="pt-14 pb-24 bg-slate-200">
      <div>
        <div>
          <p
            data-aos="fade-up"
            className="font-medium text-[14px] container text-[#aaaaaa]"
          >
            SHARHLAR
          </p>
          <h2 data-aos="fade-up" className="container text-4xl font-bold">
            SHARHLAR
          </h2>
        </div>
        <Swiper
          loop={true}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper bg-slate-200 mt-10"
        >
          <SwiperSlide className="p-8 bg-white shadow-2xl">
            <div data-aos="fade-up" className="h-[210px]">
              <strong>Anvar Mahmudov</strong>
              <p className="text-[#999] font-[14px]">Phd surgeon</p>
              <p className="italic">
                " Professionallar jamoasi menga har bir bosqichda - materialni
                tuzishdan tortib, yakuniy tahrir qilishgacha yordam berishdi.
                Hammasi yuqori aniqlik va akademik talablarga muvofiq amalga
                oshirildi. Sifatli va puxta yozilgan dissertatsiya olishni
                xohlovchilarga tavsiya qilaman!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-8 bg-white shadow-2xl">
            <div data-aos="fade-up" className="h-[210px]">
              <strong> Kamron Gayratov</strong>
              <p className="text-[#999] font-[14px]">Dizayner</p>
              <p className="italic">
                " Men kitob tayyorlash va nashr etish xizmatini so'radim va
                natija barcha kutganlardan oshib ketdi. Jamoa ishning har bir
                bosqichiga - tahrirlashdan tortib, muqova dizayni va chop
                etishgacha e'tibor bilan qaradi. Kitob professional dizayn va
                yuqori sifatli chop etish bilan ajoyib chiqdi. "
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-8 bg-white shadow-2xl">
            <div data-aos="fade-up" className="h-[210px]">
              <strong> Jaxongir Anvarov</strong>
              <p className="text-[#999] font-[14px]">Tadbirkor</p>
              <p className="italic">
                " Men transkript yaratish xizmatidan foydalandim va juda xursand
                bo'ldim. Ish tezda va juda aniqlik bilan yakunlandi. Har bir
                lahza va tafsilot to'g'ri, buzilmasdan yozib olingan. Zo'r
                xizmat, men uni yuqori sifatli va professional transkriptlarga
                muhtoj bo'lgan har bir kishiga tavsiya qilaman!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-8 bg-white shadow-2xl">
            <div data-aos="fade-up" className="h-[210px]">
              <strong> Kamron Gayratov</strong>
              <p className="text-[#999] font-[14px]">Dizayner</p>
              <p className="italic">
                " Men kitob tayyorlash va nashr etish xizmatini so'radim va
                natija barcha kutganlardan oshib ketdi. Jamoa ishning har bir
                bosqichiga - tahrirlashdan tortib, muqova dizayni va chop
                etishgacha e'tibor bilan qaradi. Kitob professional dizayn va
                yuqori sifatli chop etish bilan ajoyib chiqdi."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Text
