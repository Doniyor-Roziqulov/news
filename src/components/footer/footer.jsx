import { FaFacebookF, FaInstagram, FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#071527] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#05101e] flex flex-col items-center py-[30px] px-[20px] border-t-4 border-[#e5132c]">
          <h2 className="text-xl font-semibold">Academ Space</h2>
          <p className="italic text-gray-400 mt-1">
            Nashr qilish uchun joy, o‘sish uchun xona!
          </p>
          <p className="text-gray-300 mt-2">
            O'zbekiston, Toshkent sh., Sirg'ali t.,8-mavzesi 75-uy
          </p>
          <a href="tel:+998884969622" className="mt-2">
            <strong>Telefon:</strong> +998 88 496 96 22
          </a>
          <a href="tel:+998994177014">
            <strong>Telefon:</strong> +998 99 417 70 14
          </a>
          <a href="mailto:academsspaceline@gmail.com">
            <strong>Email:</strong> academsspaceline@gmail.com
          </a>

          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-[#1a1f2e] p-2 rounded hover:bg-red-600">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="bg-[#1a1f2e] p-2 rounded hover:bg-red-600">
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://t.me/academsspaceline"
              className="bg-[#1a1f2e] p-2 rounded hover:bg-red-600"
            >
              <FaTelegramPlane className="text-white" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Havola</h3>
          <ul className="mt-2 space-y-1">
            <li className="mb-4">
              <a href="#hero" className="text-white hover:text-red-500">
                Bosh sahifa
              </a>
            </li>
            <li className="mb-4">
              <a href="#about" className="text-white hover:text-red-500">
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href="#servis" className="text-white hover:text-red-500">
                Bizning xizmatlarimiz
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Bizning yangiliklar</h3>
          <p className="text-white text-sm mt-1 mb-12">
            Bizning xabarnomalarimizni qabul qiling
          </p>
          <form className="flex mt-3">
            <input
              type="email"
              required
              placeholder="Emailingiz"
              className="p-2 w-full text-black bg-white rounded-l"
            />
            <button
              type="submit"
              className="bg-red-600 px-4 py-2 rounded-r text-white hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
