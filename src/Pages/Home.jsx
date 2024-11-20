import React from 'react'
import { Especialidades } from '../Screens/Especialidades/Especialidades'
import { Apresentação } from '../Screens/Apresentação/Apresentação'
import { Demandas } from '../Screens/Demandas/Demandas'

export const Home = () => {
  return (
    <>
    <Apresentação/>
    <Especialidades/>
    <Demandas/>
    </>
  )
}
