import Layout from './pages/layout/Layout.jsx'
import Home from './components/home/Home.jsx'
import Jurnals from './components/jurnals/jurnals.jsx'
import './App.css'
import Aos from 'aos'
import '../node_modules/aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="jurnals" element={<Jurnals />} />
        </Route>
      </Routes>
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
