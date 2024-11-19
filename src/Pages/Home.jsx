import React from 'react'
import { Header } from '../components/Header/Header'
import { Especialidades } from '../Screens/Especialidades/Especialidades'
import { Apresentação } from '../Screens/Apresentação/Apresentação'
import { Demandas } from '../Screens/Demandas/Demandas'
import { Footer } from '../components/Footer/Footer'

export const Home = () => {
  return (
    <>
    <Header/>
    <Apresentação/>
    <Especialidades/>
    <Demandas/>
    <Footer/>
    </>
  )
}
