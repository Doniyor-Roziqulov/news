import React from 'react'

const Haqida = () => {
  return (
    <div className="my-[20px]">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
        <h1 className="text-2xl font-semibold">
          “Academs Space Line” nashriyoti
        </h1>
        <div className="space-y-1">
          <p>
            <strong>Tasischisi:</strong> Xursanoy Toshmurodova
          </p>
          <p>
            <strong>Director:</strong> Shohzod Meyliyev
          </p>
        </div>

        <div>
          <h2 className="text-xl font-medium mb-2">Ilmiy jurnal a’zolari:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Tahrirchi: Sakina To‘xtamisheva</li>
            <li>Dizayner: Navro‘zbek Tursunov</li>
            <li>Tarjimon: Dilfuza Normatova</li>
            <li>Chop etuvchi: Bektosh Voxidov</li>
            <li>SMM menejer: Abrorbek Abdulazizov</li>
            <li>Texnik xodim: Doston Rahmatullayev</li>
            <li>Texnik xodim: Jasurbek Rahmatullayev</li>
          </ul>
        </div>

        <p>
          “Academs Space Line” xalqaro ilmiy jurnaliga qabul qilingan
          maqolalarga <strong>5 ish kunida DOI raqam olinadi</strong> va
          <strong>
            {' '}
            Index Copernicus, Zenodo, OpenAire, Cyberleninka, Google Scholar
          </strong>{' '}
          xalqaro ilmiy bazalarida indekslanadi va jurnal elektron ilmiy bazasi{' '}
          <a href="http://www.academsspace.uz" className="underline">
            http://www.academsspace.uz
          </a>{' '}
          ga joylanadi.
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-medium">
            “Academs Space” xalqaro ilmiy jurnali quyidagi yoʻnalishlar boʻyicha
            maqolalar qabul qiladi:
          </h2>
          <section>
            <h3 className="font-semibold mb-1">A seriya:</h3>
            <ul className="list-disc pl-6">
              <li>01.00.00 FIZIKA-MATEMATIKA fanlari</li>
              <li>02.00.00 KIMYO fanlari</li>
              <li>05.00.00 TEXNIKA fanlari</li>
              <li>08.00.00 IQTISODIYOT fanlari</li>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold mb-1">B seriya:</h3>
            <ul className="list-disc pl-6">
              <li>09.00.00 FALSAFA fanlari</li>
              <li>10.00.00 FILOLOGIYA fanlari</li>
              <li>13.00.00 PEDAGOGIKA fanlari</li>
              <li>19.00.00 PSIXOLOGIYA fanlari</li>
              <li>22.00.00 SOTSIOLOGIYA fanlari</li>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold mb-1">C seriya:</h3>
            <ul className="list-disc pl-6">
              <li>04.00.00 GEOLOGIYA va MINERALOGIYA fanlari</li>
              <li>07.00.00 TARIX fanlari</li>
              <li>11.00.00 GEOGRAFIYA fanlari</li>
              <li>12.00.00 YURIDIK fanlari</li>
              <li>17.00.00 SAN'ATSHUNOSLIK fanlari</li>
              <li>18.00.00 ARXITEKTURA fanlari</li>
            </ul>
          </section>
          <section>
            <h3 className="font-semibold mb-1">D seriya:</h3>
            <ul className="list-disc pl-6">
              <li>03.00.00 BIOLOGIYA fanlari</li>
              <li>06.00.00 QISHLOQ XOʻJALIGI fanlari</li>
              <li>14.00.00 TIBBIYOT fanlari</li>
              <li>15.00.00 FARMATSEVTIKA fanlari</li>
              <li>16.00.00 VETERINARIYA fanlari</li>
            </ul>
          </section>
        </div>

        <div className="space-y-2">
          <p>
            <strong>Maqolalarni qabul qilish muddati:</strong> Har oyning
            25-sanasiga qadar.
          </p>
          <p>
            <strong>Jurnalning rasmiy tili:</strong> ingliz tili.
          </p>
          <p>
            <strong>Jurnalning nashr etilish sanasi:</strong> Har oyning
            30-sanasida.
          </p>
          <p>
            <strong>Jurnal rasmiy sayti:</strong>{' '}
            <a href="http://www.academsspace.uz" className="underline">
              http://www.academsspace.uz
            </a>
          </p>
          <p>
            <strong>Jurnal telegram kanali:</strong>{' '}
            <a href="https://t.me/academs_space_line" className="underline">
              https://t.me/academs_space_line
            </a>
          </p>
          <p>
            Muallifga indekslangan maqola pdf varianti, maqola indekslanganini
            asoslovchi xalqaro bazadagi linklari (QR kod koʻrinishida ham)
            keltirilgan ma’lumotnoma, sertifikat va mualliflik guvohnomasi
            taqdim etiladi.
          </p>
          <p>
            Jurnalning toʻplam shakli har oyning 30-sanasida{' '}
            <a href="http://www.academsspace.uz" className="underline">
              http://www.academsspace.uz
            </a>{' '}
            saytiga va{' '}
            <a href="https://t.me/academs_space_line" className="underline">
              https://t.me/academs_space_line
            </a>{' '}
            telegram kanaliga joylashtiriladi.
          </p>
          <p>
            Jurnalning nashr qilingan qogʻoz varianti alohida buyurtma asosida
            maqola mualliflari va tahrir hay’ati a’zolariga pochta orqali
            tarqatiladi.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            TAQDIM ETILADIGAN MAQOLALARGA QOʻYILADIGAN TALABLAR
          </h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li>
              Maqola xalqaro talab darajasidagi <strong>IMRAD</strong> shaklida
              yozilgan boʻlishi lozim.
            </li>
            <li>
              Maqola nomi, annotatsiya va kalit soʻzlar, shuningdek maqola matni{' '}
              <strong>ingliz</strong> tilida boʻlishi lozim.
            </li>
            <li>
              Maqolalar ilmiy jurnal yoʻnalishiga oid dolzarb mavzularda, ilmiy
              va tugallangan fikrlarga asoslangan, taklif va tavsiyalar bilan
              taqdim etilishi lozim.
            </li>
            <li>
              Maqola matnlari <strong>A4</strong> hajmda, yuqoridan va pastdan{' '}
              <strong>2 sm</strong>, chapdan <strong>2.25 sm</strong>, oʻngdan{' '}
              <strong>2.25 sm</strong> xoshiyaga ega boʻlishi kerak.
            </li>
            <li>
              Maqola matni <strong>Word</strong> matn muharririda,{' '}
              <strong>Times New Roman</strong> shrifti, <strong>12</strong>{' '}
              oʻlchamida, <strong>1.15</strong> intervalda boʻlishi va{' '}
              <strong>5-15 bet</strong> hajmda boʻlishi, mualliflar soni{' '}
              <strong>4</strong> nafardan oshmasligi lozim.
            </li>
          </ul>

          <p className="mt-4">
            Yuborilgan ilmiy maqolalar tahrir hay’ati tomonidan koʻrib
            chiqiladi. Tahrirdan oʻtmagan, originalligi <strong>70%</strong> dan
            kam bo‘lgan va talablar boʻyicha yuborilmagan maqolalar nashr
            etilmaydi.
          </p>

          <p className="mt-4">
            Maqolalar elektron shaklda{' '}
            <a href="https://t.me/nashriyot_9622" className="underline">
              https://t.me/nashriyot_9622
            </a>{' '}
            telegram manzillari orqali qabul qilinadi. Mas’ul xodim:{' '}
            <strong>Meyliyev Shohzod</strong>
          </p>

          <p className="mt-2">
            <strong>Murojaat uchun telefon raqami:</strong> +998 88 496 9622
          </p>
        </div>

        <p className="mt-4">
          Taqdim etilgan maqola qabul qilingandan soʻng, bitta maqola uchun{' '}
          <strong>300 000 soʻm</strong> toʻlov olinadi.
        </p>
      </div>
    </div>
  )
}

export default Haqida
