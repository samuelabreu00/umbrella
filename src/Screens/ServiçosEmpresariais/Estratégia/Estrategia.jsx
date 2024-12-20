import React from 'react'
import './Estrategia.css'
import imgAbsolut from '../../../assets/absolutServiços.png'
import { ButtonAgendarWhite } from '../../../components/ButtonAgendarWhite/ButtonAgendarWhite'

export const Estrategia = () => {
  return (
    <>
    <section className="servicos">
        <div className="containerServicos" data-aos="fade-up">
          <img className="absolut" src={imgAbsolut} alt="" />
            <div className="text">
                <div className="titles">
                    <h1>Saúde Mental</h1>
                    <h2>também é estratégia.</h2>
                </div>
                <p>Visar o lucro sem focar na <span> saúde mental da sua equipe</span> é colocar em risco anos de trabalho construindo seu negócio.</p>

            </div>
            <img src={imgAbsolut} alt="" className="block"/>
        </div>
        
    </section>
    </>
  )
}
