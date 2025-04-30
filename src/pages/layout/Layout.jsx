import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="mt-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
