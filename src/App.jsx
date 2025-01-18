import './App.css'
import axios from 'axios'
import Clock from './components/clock'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Carrousel from './components/Carrousel'


function App() {
  return (
    <>
      <NavBar/>
      <Carrousel images={["./pessi.jpeg","./penaldo.jpg  ","./vini.jpeg","./jordan.jpg","./brady.png"]}/>  
      <Clock/>
      
      <Footer/>
    </>
  )
}

export default App
