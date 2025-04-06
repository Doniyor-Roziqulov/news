import { BsEmojiSmile, BsJournals, BsPeople } from 'react-icons/bs'
import './about.css'
import { PiHeadsetFill } from 'react-icons/pi'
const stats = [
  {
    id: 1,
    icon: <BsEmojiSmile />,
    value: '232',
    title: 'Hursand mijozlar',
    description: 'va ular bizga ishonishda davom etadilar',
  },
  {
    id: 2,
    icon: <BsJournals />,
    value: '521',
    title: "Dunyo bo'ylab omborlarda chop etilgani",
    description: 'ilmiy maqolalar',
  },
  {
    id: 3,
    icon: <PiHeadsetFill />,
    value: '1 463',
    title: 'Maslahat soatlari',
    description: 'Biz mijozlarimizga har tomonlama yordam beramiz',
  },
  {
    id: 4,
    icon: <BsPeople />,
    value: '8',
    title: 'Professionallar',
    description:
      'Bizning mutaxassislarimiz har qanday muammoni hal qilishga tayyor',
  },
]
const About = () => {
  return (
    <section id="about" className="container" data-aos="fade-up">
      <div>
        <h5 className="about-title">Biz Haqimizda</h5>

        <h2 className="about-heading">BIZ HAQIMIZDA</h2>

        <div className="about-grid">
          <div>
            <p className="about-text">
              Biz Oʻzbekistondagi ilmiy ishlar omborimiz bo‘lib, ilmiy
              bilimlarni saqlash, tarqatish va almashish uchun platformani
              taqdim etamiz. Bizning vazifamiz – tadqiqotchilar va olimlarni
              ko‘plab ilmiy nashrlardan foydalanishini ta’minlash, mamlakat
              ilm-fan va ta’lim rivojiga hissa qo‘shish orqali
              qo‘llab-quvvatlashdir.
            </p>
            <ul className="about-list">
              <li>
                <span>✔</span> Xalqaro mavjudligi.
              </li>
              <li>
                <span>✔</span> Xavfsiz saqlash.
              </li>
              <li>
                <span>✔</span> Qo‘llab-quvvatlash va targ‘ib qilish.
              </li>
            </ul>
          </div>
          <div>
            <p className="about-text">
              Ilk ilmiy ishingizni dunyoning eng yirik omborlarida nashr eting
              va ilmiy hamjamiyatda tan olinishingiz uchun muhim qadam tashlang.
              Tadqiqotlaringizni butun dunyo boʻylab millionlab hamkasblar uchun
              ochiq qilish uchun xalqaro platformalarda baham koʻring.
            </p>
            <p className="about-text">
              Academ Space olimlar hamjamiyatiga qoʻshiling, u yerda siz nafaqat
              oʻz yutuqlaringiz bilan oʻrtoqlashishingiz, balki boshqalarning
              ishidan ilhom olishingiz mumkin. Bunday platformalarda nashr
              qilish yangi imkoniyatlar yaratadi.
            </p>
            <a href="#" className="about-button">
              Maslahat oling
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className=" about-data  mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white shadow-md rounded-xl p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
              >
                <div className="flex items-center gap-x-2.5">
                  <div className="text-red-500 text-3xl mb-3">{stat.icon}</div>
                  <h2 className="text-[42px] font-bold text-gray-900 mb-4">
                    {stat.value}
                  </h2>
                </div>
                <p className="text-[14px] md:text-lg text-start font-medium text-gray-900">
                  {stat.title}
                  <span className=" text-gray-600 font-normal text-base mt-1">
                    {stat.description}
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block text-blue-900 font-semibold hover:underline transition-colors duration-200"
                >
                  Batafsil ma'lumot oling »
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
