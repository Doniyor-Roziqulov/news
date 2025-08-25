import React from 'react'
import { FaDownload } from 'react-icons/fa6'

const jurnals = () => {
  return (
    <div className="mt-[150px] mb-[100px]">
      <div className="container ">
        <div className="flex  items-center">
          <a
            className="m-10 flex  items-center gap-x-1"
            href="/International.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <FaDownload className="text-3xl border p-0.5" />
            <p className="text-2xl">Academs Space PDF</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default jurnals
