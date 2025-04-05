import Headers from './components/header/header'
import Carousel from './components/hero/carousel'
import Slavery from './components/slavery/slavery'
import About from './components/about/about'
import Information from './components/information/information'
import Text from './components/text/Text'
import Artecil from './components/artecil/artecil'
import Address from './components/address/address'
import Footer from './components/footer/footer'
import './App.css'
import Aos from 'aos'
import '../node_modules/aos/dist/aos.css'
import { useEffect, useState } from 'react'
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  return (
    <>
      <Headers />
      <main className="mt-8">
        <Carousel />
        <About />
        <Slavery />
        <Information />
        <Text />
        <Artecil />
        <Address />
        <Footer />
      </main>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '15px',
            right: '15px',
            padding: '1rem',
            backgroundColor: '#e5132c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            zIndex: '10',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ↑
        </button>
      )}
    </>
  )
}

export default App
