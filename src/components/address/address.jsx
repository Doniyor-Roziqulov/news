import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <>
      <div id="contact" data-aos="fade-up">
        <div className="bg-[#f5f9ff] py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="font-medium text-[14px] container text-[#aaaaaa]">
              KONTAKTLAR
            </p>
            <h2 className="container text-4xl font-bold">
              BIZ BILAN BOG'LANISH
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className=" bg-white shadow p-6 rounded-lg text-center sm:col-span-2">
                  <div className="text-red-500 text-3xl mb-2">📍</div>
                  <h3 className="font-bold text-[20px] text-[#777777] mb-1">
                    Bizning manzil
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/u3BE3b2ni2mvTxay5"
                    target="_blank"
                    className="text-sm text-gray-600"
                  >
                    O'zbekiston, Toshkent sh., Sirg'ali t.,8-mavzesi 75-uy
                  </a>
                </div>

                <div className="bg-white shadow p-6 rounded-lg text-center">
                  <div className="text-red-500 text-3xl mb-2">✉️</div>
                  <h3 className="font-bold text-[20px] text-[#777777] mb-1">
                    Biz bilan bog'lanish
                  </h3>
                  <a
                    href="mailto:academsspaceline@gmail.com"
                    className="text-sm"
                  >
                    academsspaceline@gmail.com
                  </a>
                </div>

                <div className="bg-white shadow p-6 rounded-lg text-center">
                  <div className="text-red-500 text-3xl mb-2">📞</div>
                  <h3 className="font-bold text-[20px] text-[#777777] mb-1">
                    Bizga qo'ng'iroq qiling
                  </h3>
                  <Link to={'tel:+998939862200'} className="text-sm">
                    +998 93 986 22 00
                  </Link>
                  <Link to={'tel:+998884247447'} className="text-sm block">
                    +998 88 496 96 22
                  </Link>
                  <a href="tel:+998994177014" className="text-sm block">
                    +998 99 417 70 14
                  </a>
                </div>
              </div>

              <div className="bg-white shadow p-6 rounded-lg">
                <form className="space-y-4 flex flex-col">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Ismingiz"
                      className="border border-b-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <input
                      type="number"
                      required
                      placeholder="Mobil raqamingiz"
                      className="border border-b-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </div>
                  <textarea
                    placeholder="Xabar"
                    required
                    className="border border-b-gray-300 rounded px-4 py-2 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2  mx-auto rounded mt-4
                    "
                  >
                    Jo'natish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Address
