import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Carousel from "./components/carousel/Carousel"
import Cards from "./components/card/Card"
import Agreement from "./components/contract/Agreement"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Carousel/>
      <Cards/>
      <Agreement/>
      <Footer/>
    </div>
  )
}

export default App