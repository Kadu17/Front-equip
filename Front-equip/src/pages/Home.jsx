import Header from '../sections/components/Header.jsx'
import Pesquisa from '../sections/components/Pesquisa.jsx'
import Btn from '../sections/components/btn.jsx'
import Text from '../sections/components/text.jsx'
import Carousel from '../sections/components/Carousel.jsx'
import Wpp from '../sections/components/wpp.jsx'
import Sobre from '../sections/components/Sobre.jsx'
import Footer from '../sections/components/Footer.jsx'
import Banner from '../sections/components/Banner.jsx'

export default function Home() {
  return (
    <>
    <Header></Header>
    <Pesquisa></Pesquisa>
    <Btn></Btn>
    <Banner/>
    <Text></Text>
    <Carousel></Carousel>
    <Wpp></Wpp>
      <Sobre></Sobre>
      <Footer></Footer>
    </>
    
  )
}
