import './App.css'
import Business from './components/business/business'
import Cards from './components/cards/cards'
import CardsType from './components/cardstype/cardstype'
import ChatButton from './components/chatbutton/chatbutton'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Investiments from './components/investiments/investiments'
import Investype from './components/investype/investype'
import Products from './components/products/products'

function App() {
  return (
    <>
      <Header />
      <ChatButton />
      <Hero />
      <Products />
      <Cards />
      <CardsType />
      <Investiments />
      <Investype />
      <Business />
      <Footer />
    </>
  )
}

export default App
