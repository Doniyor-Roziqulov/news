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
                <Link onClick={() => setData(false)} to="/#hero">
                  Bosh sahifa
                </Link>
              </li>
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <Link onClick={() => setData(false)} to="/#about">
                  Biz haqimizda
                </Link>
              </li>
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <Link onClick={() => setData(false)} to="/#servis">
                  Bizning xizmatlarimiz
                </Link>
              </li>
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <Link onClick={() => setData(false)} to="/publishers">
                  Nashr qilingan kitoblar
                </Link>
              </li>
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <div className="relative group inline-block">
                  <Link
                    onClick={() => setData(false)}
                    to="/jurnals"
                    className="text-black px-4 py-2"
                  >
                    Jurnallar
                  </Link>

                  <div
                    className="absolute border border-black left-0 top-full mt-1 hidden group-hover:block group-focus-within:block bg-white shadow-lg rounded z-10"
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                  >
                    <div className="flex flex-col p-2 min-w-[140px]">
                      <Link
                        to="/nashir"
                        className="py-1 px-2 hover:bg-gray-100 rounded"
                      >
                        Yangi jurnallar
                      </Link>
                      <Link
                        to="/kitoblar"
                        className="py-1 px-2 hover:bg-gray-100 rounded"
                      >
                        Arxiv jurnallar
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-gray-700 px-[15px] md:px-[10px] text-[15px] font-medium md:text-[14px] min-[880px]:text-[15px] hover:text-red-600 lg:text-[15px] lg:px-[15px]">
                <Link onClick={() => setData(false)} to="/#contact">
                  Kontaktlar
                </Link>
              </li>
              <li className="text-gray-700 header_item-aloqa hover:text-red-600">
                <Link onClick={() => setData(false)} to="/#hero">
                  Biz bilan bog'lanish
                </Link>
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
