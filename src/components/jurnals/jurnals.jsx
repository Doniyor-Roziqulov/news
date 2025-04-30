import React from 'react'
import book1 from '../images/book1.png'
import book2 from '../images/book2.jpg'
import book3 from '../images/book3.png'
import book4 from '../images/book4.png'
import book5 from '../images/book5.png'

const jurnals = () => {
  return (
    <div className="mt-[150px] mb-[100px]">
      <div className="container ">
        <ul className="flex justify-between gap-x-3 items-center">
          <li className="border border-black">
            <img className="w-[130px] lg:w-[280px]" src={book1} alt="" />
          </li>
          <li className="border border-black">
            <img className="w-[130px] lg:w-[280px]" src={book2} alt="" />
          </li>
          <li className="border border-black">
            <img className="w-[130px] lg:w-[280px]" src={book3} alt="" />
          </li>
          <li className="border border-black">
            <img className="w-[130px] lg:w-[280px]" src={book4} alt="" />
          </li>
          <li className="border border-black">
            <img className="w-[130px] lg:w-[280px]" src={book5} alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default jurnals
