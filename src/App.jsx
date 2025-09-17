import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Carousel from "./components/carousel/Carousel"
import Cards from "./components/card/Card"
import Agreement from "./components/contract/Agreement"
import IDForm from "./components/forma/IDForm/IDForm"
import Footer from "./components/footer/Footer"
import Contract from "./pages/contract/Contract"

const App = () => {
  return (
    <>

      <Header/>
      <Navbar/>
      <Hero/>
      <Carousel/>
      <Cards/>
      <Agreement/>
      <Footer/>
      {/* <Contract/>
      <IDForm/> */}
    </>
  )
}

export default App