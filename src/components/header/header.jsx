import './header.css'
import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
const Header = () => {
  const [data, setData] = useState(false)
  return (
    <>
      <div>
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
          <div className="container header_box mx-auto relative px-6 py-3 flex justify-between items-center">
            <Link to={'/'}>
              <img
                src={logo}
                alt="Site's logo"
                className="header-logo "
                width={125}
              />
            </Link>

            <ul
              className={`${
                data == true
                  ? 'flex flex-col border md:border-none z-20 items-start p-16 gap-y-2.5 absolute left-[30px] transition-all top-[50px] bg-white md:relative md:left-0 md:top-0 md:flex-row md:items-center'
                  : 'flex flex-col z-20 items-start absolute left-[-1000px] transition-all top-0 md:relative md:left-0 md:top-0 md:flex-row md:items-center'
              }`}
            >
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <a href="#hero">Bosh sahifa</a>
              </li>
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <a href="#about">Biz haqimizda</a>
              </li>
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <a href="#servis">Bizning xizmatlarimiz</a>
              </li>
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <a href="#contact">Kontaktlar</a>
              </li>
              <li className="text-gray-700 header_item-aloqa hover:text-red-600">
                <a href="#hero">Biz bilan bog'lanish</a>
              </li>
              {/* <li className="text-gray-700 header_item ">
                <select className="bg-white  px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600">
                  <option value="UZ">UZ</option>
                  <option value="RUS">RUS</option>
                </select>
              </li> */}
            </ul>
            {data === true && (
              <div className="w-full h-full bg-[#000d] absolute left-0 top-0 z-10 md:hidden"></div>
            )}
            <button className="z-30 md:hidden" onClick={() => setData(!data)}>
              {data === true ? (
                <IoCloseOutline className="text-3xl text-white" />
              ) : (
                <RxHamburgerMenu className="text-2xl " />
              )}
            </button>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
