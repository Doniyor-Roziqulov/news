import React from 'react'
import Carousel from '../hero/carousel'
import Slavery from '../slavery/slavery'
import About from '../about/about'
import Information from '../information/information'
import Text from '../text/Text'
import Artecil from '../artecil/artecil'
import Address from '../address/address'

const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Slavery />
      <Information />
      <Text />
      <Artecil />
      <Address />
    </div>
  )
}

export default Home
