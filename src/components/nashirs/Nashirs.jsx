import React from 'react'
import book1 from '../images/book1.png'
import book2 from '../images/book2.jpg'
import book3 from '../images/book3.png'
import book4 from '../images/book4.png'
import book5 from '../images/book5.png'

const Nashirs = () => {
  return (
    <div className="mt-[150px] mb-[100px]">
      <div className="container">
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="border border-black w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[16%]">
            <img className="w-full" src={book1} alt="Book 1" />
          </li>
          <li className="border border-black w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[16%]">
            <img className="w-full" src={book2} alt="Book 2" />
          </li>
          <li className="border border-black w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[16%]">
            <img className="w-full" src={book3} alt="Book 3" />
          </li>
          <li className="border border-black w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[16%]">
            <img className="w-full" src={book4} alt="Book 4" />
          </li>
          <li className="border border-black w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[16%]">
            <img className="w-full" src={book5} alt="Book 5" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nashirs
