import React from 'react'
import './SaudeMente.css'
import {ButtonAgendarWhite} from '../../../components/ButtonAgendarWhite/ButtonAgendarWhite'
import imgHomem from '../../../assets/absolut.png'

export const SaudeMente = () => {
  return (
    <>
    <section className="saude">
      <img src={imgHomem} alt="" className='absolut'/>
   
        <div className="containerSaude"data-aos="fade-up">
            <div className="text">
                <h1>Saúde além da mente.</h1>
                <p>A <span>umbrella</span> tem o algo a mais que você sempre quis, com a <span>umbrella nutri</span> você vai poder ser sua melhor versão.</p>
                <p className='ultimo'>- Personalize sua dieta; <br /> - Tenha acompanhamento no seus treinos; <br /> - Dicas de saúde para uma vida saudável e muito mais.</p>
                <ButtonAgendarWhite name='Quero saber mais' />
            </div>
        </div>
    </section>
    </>
  )
}
