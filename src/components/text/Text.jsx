import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
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
      <div className="max-w-7xl mx-auto px-4">
        <div className=" mb-10">
          <p data-aos="fade-up" className="font-medium text-sm text-gray-400">
            SHARHLAR
          </p>
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold">
            SHARHLAR
          </h2>
        </div>

        <Swiper
          loop={true}
          onSwiper={setSwiperRef}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper bg-slate-200"
        >
          {[
            {
              name: 'Dostonbek Rahmatullayev',
              job: 'Phd surgeon',
              text: `Professionallar jamoasi menga har bir bosqichda - materialni tuzishdan tortib, yakuniy tahrir qilishgacha yordam berishdi. Hammasi yuqori aniqlik va akademik talablarga muvofiq amalga oshirildi. Sifatli va puxta yozilgan dissertatsiya olishni xohlovchilarga tavsiya qilaman!`,
            },
            {
              name: `Doniyor Ro'ziqulov`,
              job: 'Dizayner',
              text: `Men kitob tayyorlash va nashr etish xizmatini so'radim va natija barcha kutganlardan oshib ketdi. Jamoa ishning har bir bosqichiga - tahrirlashdan tortib, muqova dizayni va chop etishgacha e'tibor bilan qaradi. Kitob professional dizayn va yuqori sifatli chop etish bilan ajoyib chiqdi.`,
            },
            {
              name: 'Laziz Usmonov',
              job: 'Tadbirkor',
              text: `Men transkript yaratish xizmatidan foydalandim va juda xursand bo'ldim. Ish tezda va juda aniqlik bilan yakunlandi. Har bir lahza va tafsilot to'g'ri, buzilmasdan yozib olingan. Zo'r xizmat, men uni yuqori sifatli va professional transkriptlarga muhtoj bo'lgan har bir kishiga tavsiya qilaman!`,
            },
            {
              name: 'Sardor Najmiddinov',
              job: 'Dizayner',
              text: `Men kitob tayyorlash va nashr etish xizmatini so'radim va natija barcha kutganlardan oshib ketdi. Jamoa ishning har bir bosqichiga - tahrirlashdan tortib, muqova dizayni va chop etishgacha e'tibor bilan qaradi. Kitob professional dizayn va yuqori sifatli chop etish bilan ajoyib chiqdi.`,
            },
          ].map((item, index) => (
            <SwiperSlide key={index} className="p-6 md:p-8 bg-white shadow-2xl">
              <div data-aos="fade-up" className="h-full flex flex-col gap-3">
                <strong>{item.name}</strong>
                <p className="text-gray-500 text-sm">{item.job}</p>
                <p className="italic text-sm md:text-base text-gray-700">
                  “ {item.text} ”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Text
