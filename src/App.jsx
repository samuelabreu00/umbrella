import { About } from "./Pages/About"
import  {Doubt}  from "./Pages/Doubt"
import { Home } from "./Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Services } from "./Pages/Services"
import { UmbrellaClub } from "./Pages/UmbrellaClub"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<About/>}/>
        <Route path='/nosprocure' element={<Doubt/>}/>
        <Route path='/serviçosempresariais' element={<Services/>}/>
        <Route path='/club' element={<UmbrellaClub/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
