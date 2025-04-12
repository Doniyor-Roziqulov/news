import { Collapse } from 'antd'

const text1 = `
 - Formatlash: Biz sizning ishingiz tanlangan omborning barcha formatlash talablariga, jumladan, iqtiboslar uslubiga, jadval va grafiklar taqdimotiga javob berishini ta'minlaymiz.
- Tahrirlash: Mutaxassislarimiz taqdimotning ravshanligi va izchilligini ta'minlash uchun matnda imlo, grammatik va uslub xatolarini tekshiradilar.
- Fikr-mulohazalarni olish: Biz sizga professional fikr-mulohaza va ish sifatini yaxshilash bo'yicha tavsiyalar olishga yordam beramiz.
`

const text2 = `
- Tadqiqot imkoniyatlari: Biz sizning ta'lim sohangizga mos keladigan mos omborni tanlaymiz.
- Hisob yaratish: Biz sizni tanlangan platformada ro'yxatdan o'tkazamiz va agar kerak bo'lsa, hisob yaratamiz.
- Talablarni ko'rib chiqish: Biz tanlangan omborga yuklangan materiallar uchun nashr qilish siyosati va talablarini ko'rib chiqamiz.
`

const text3 = `
- Faylni yuklash: Ishingizni yuklash bo'limi orqali platformaga yuklaymiz. - Metama'lumotlarni to'ldirish: Biz ish haqida kerakli ma'lumotlarni kiritamiz, masalan, nom, mualliflar, ish joyi, referat va kalit so'zlar.
- Tasdiqlash va topshirish: Biz kiritilgan barcha ma'lumotlarni tekshiramiz va ishni nashrga topshirishni tasdiqlaymiz. Muvaffaqiyatli chop etilgandan so'ng siz xabarnoma olasiz.
`

const items = [
  {
    key: '1',
    label: (
      <span style={{ color: '#0b2341', fontSize: '16px', fontWeight: '500' }}>
        <span style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>
          01
        </span>{' '}
        Ishga tayyorgarlik
      </span>
    ),
    children: <p className="text-[20px] font-light">{text1}</p>,
  },
  {
    key: '2',
    label: (
      <span style={{ color: '#0b2341', fontSize: '16px', fontWeight: '500' }}>
        <span style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>
          02
        </span>{' '}
        Repozitoriy tanlash
      </span>
    ),
    children: <p className="text-[20px] font-light">{text2}</p>,
  },
  {
    key: '3',
    label: (
      <span style={{ color: '#0b2341', fontSize: '16px', fontWeight: '500' }}>
        <span style={{ color: 'red', fontSize: '18px', fontWeight: '600' }}>
          03
        </span>{' '}
        Yuklash va nashr qilish
      </span>
    ),
    children: <p className="text-[20px] font-light">{text3}</p>,
  },
]

const Slavery = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto py-[30px] lg:gap-x-[112px] bg-slate-100">
      <div
        data-aos="zoom-in"
        className="w-full md:w-[400px] lg:w-[630px] h-[640px]"
      >
        <iframe
          className="w-full md:w-[400px] lg:w-[630px] h-[400px] lg:h-[640px]"
          src="https://www.youtube.com/embed/5gAab_i-zG4"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
      <div data-aos="fade-up" className="text-container container">
        <h2 className="font-normal text-[24px] md:text-[34px] text-[#123a6d]">
          Tadqiqot maqolangizni nashr qilishda sizga qanday yordam berishimiz
          mumkin<span className="font-bold block">Uch oson qadam:</span>
        </h2>
        <Collapse defaultActiveKey={['1']} accordion items={items} />
      </div>
    </div>
  )
}

export default Slavery
