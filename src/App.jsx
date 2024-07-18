import React from 'react'
import './App.css'
import Header from './sections/components/Header.jsx'
import Pesquisa from './sections/components/Pesquisa.jsx'
import Btn from './sections/components/btn.jsx'
import Text from './sections/components/text.jsx'
import Wpp from './sections/components/wpp.jsx'
import Sobre from './sections/components/Sobre.jsx'
import Footer from './sections/components/Footer.jsx'
import Carousel from './sections/components/Carousel.jsx'
import ProductList from './sections/components/ProductList.jsx'

function App() {
  

  return (
    <>
      <Header></Header>
      <Pesquisa></Pesquisa>
      <Btn></Btn>
      <Text></Text>
      <Carousel></Carousel>
      {/* <ProductList></ProductList> */}
      <Wpp></Wpp>
      <Sobre></Sobre>
      <Footer></Footer>
    </>
  )
}

export default App
