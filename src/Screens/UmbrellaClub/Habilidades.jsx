import React from 'react'
import './Habilidades.css'
import { ButtonAgendarBlack } from '../../components/ButtonAgendarBlack/ButtonAgendarBlack'

export const Habilidades = () => {
  return (
   <section className="habilidades">
    <div className="containerHabilidades" data-aos="fade-up">
        <div className="boxTitles">
            <div className="titles">
                <h1>Torne-se indispensável e melhore suas habilidades</h1>
                <h2><span>Melhore sua performance</span> e seja sua melhor versão com saúde física e mental de alto nível</h2>
            </div>
            <p>Mentorias individuais, cursos e novos hábitos</p>
            <ButtonAgendarBlack name="Quero melhorar minhas habilidades"/>
        </div>
        
    </div>
   </section>
  )
}
