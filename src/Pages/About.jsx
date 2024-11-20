import React from 'react'
import { Header } from '../components/Header/Header'
import { Main } from '../Screens/AboutScreen/Meio/Main'
import { ComoSurgiu } from '../Screens/AboutScreen/ComoSurgiu/ComoSurgiu'
import { Footer } from '../components/Footer/Footer'
import { SaudeMente } from '../Screens/AboutScreen/SaudeMente/SaudeMente'

export const About = () => {
  return (
    <>
    <Main/>
    <ComoSurgiu/>
    <SaudeMente/>
    </>
  )
}
