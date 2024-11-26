import React from 'react'
import './Habilidades.css'
import {ButtonAgendarWhite} from '../../components/ButtonAgendarWhite/ButtonAgendarWhite'

export const Habilidades = () => {
  return (
   <section className="habilidades">
    <div className="containerHabilidades">
        <div className="boxTitles">
            <div className="titles" data-aos="fade-up">
                <h1>Torne-se indispensável e melhore suas habilidades</h1>
                <h2><span>Melhore sua performance</span> e seja sua melhor versão com saúde física e mental de alto nível</h2>
            </div>
            <p data-aos="fade-up">Mentorias individuais, cursos e novos hábitos</p>
            <ButtonAgendarWhite name="Quero melhorar minhas habilidades"/>
        </div>
        
    </div>
   </section>
  )
}
