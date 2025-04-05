import { BookOpen } from 'lucide-react'
import './information.css'
const services = [
  {
    id: 1,
    title: 'Kitob nashr etish',
    description:
      "Hikoyangizni sahifalarda jonlantirish uchun biz kitob nashr qilish xizmatlarining to'liq spektrini taklif qilamiz, jumladan tahrirlash, dizayn va chop etish.(SBN,KBK,UDK)",
    icon: '/icons/book.svg',
    isHighlighted: true,
  },
  {
    id: 2,
    title: 'Abstrakt',
    description:
      'Biz referatni barcha talablarga javob berishi va sifatli bo‘lishini ta’minlagan holda professional tarzda tayyorlaymiz va nashr qilamiz.',
    icon: '/icons/abstract.svg',
    isHighlighted: false,
  },
  {
    id: 3,
    title: 'Transkriptlar',
    description:
      "Biz har bir so'zning aniqligi va savodxonligini kafolatlaydigan transkriptlarni tayyorlash va nashr etish bo'yicha xizmatlarni taklif qilamiz.",
    icon: '/icons/transcript.svg',
    isHighlighted: false,
  },
  {
    id: 4,
    title: 'Dissertatsiyalarni tayyorlash va nashr etish',
    description:
      "Biz dissertatsiyalarni tayyorlash va nashr etish, yuqori darajadagi ilmiy taqdimotni va barcha akademik standartlarga muvofiqligini ta'minlash bo'yicha xizmatlar ko'rsatamiz.",
    icon: '/icons/transcript.svg',
    isHighlighted: false,
  },
  {
    id: 5,
    title: 'Maqolalarni tayyorlash va tahrirlash',
    description:
      "Biz ilmiy nashrlarning yuqori sifati va talablariga muvofiqligini ta'minlagan holda maqola tayyorlash va tahrirlash xizmatlarini taqdim etamiz.",
    icon: '/icons/transcript.svg',
    isHighlighted: false,
  },
  {
    id: 6,
    title: 'Monografiyalar yaratish',
    description:
      "Biz ilmiy nashrlarning yuqori sifati va talablariga muvofiqligini ta'minlagan holda maqola tayyorlash va tahrirlash xizmatlarini taqdim etamiz.",
    icon: '/icons/transcript.svg',
    isHighlighted: false,
  },
]

const Information = () => {
  return (
    <div id="servis" className="py-12 bg-neutral-50">
      <p
        data-aos="fade-up"
        className="font-medium text-[14px] container text-[#aaaaaa]"
      >
        XIZMATLAR
      </p>
      <h2 data-aos="fade-up" className="container text-4xl font-bold">
        BIZNING XIZMATLARIMIZ
      </h2>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-3 gap-6 max-w-[1320px] mx-auto px-4 ">
        {services.map((service) => (
          <div
            key={service.id}
            data-aos="zoom-in"
            className="bg-white list__inf  px-5 py-20 transition-all h-[360px] rounded-[10px] "
          >
            <div className=" flex items-center justify-center ">
              <div className="relative w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                <BookOpen className="text-white w-6 h-6" />
              </div>
            </div>
            <h3 className="list__h3 font-bold text-3xl text-center">
              {service.title}
            </h3>
            <p className="list__text text-center mt-6">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information
