import './header.css'
import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div>
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
          <div className="container header_box mx-auto px-6 py-3 flex justify-between items-center">
            <Link to={'/'}>
              <img
                src={logo}
                alt="Site's logo"
                className="header-logo "
                width={125}
              />
            </Link>

            <ul className="hidden md:flex items-center">
              <li className="text-gray-700 header_item hover:text-red-600">
                <a href="#hero">Bosh sahifa</a>
              </li>
              <li className="text-gray-700 header_item hover:text-red-600">
                <a href="#about">Biz haqimizda</a>
              </li>
              <li className="text-gray-700 header_item hover:text-red-600">
                <a href="#servis">Bizning xizmatlarimiz</a>
              </li>
              <li className="text-gray-700 header_item hover:text-red-600">
                <a href="#contact">Kontaktlar</a>
              </li>
              <li className="text-gray-700 header_item-aloqa hover:text-red-600">
                <a href="#hero">Biz bilan bog'lanish</a>
              </li>
              <li className="text-gray-700 header_item ">
                <select className="bg-white  px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600">
                  <option value="UZ">UZ</option>
                  <option value="RUS">RUS</option>
                </select>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
