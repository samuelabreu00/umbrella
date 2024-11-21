import React from 'react'
import './Apresentação.css'
import imgComplemento from '../../assets/imginiciosobre.png'


export const Apresentação = () => {
  return (
    <>
        <section className="apresentacao">
           
            <div className="containerApresentacao">
            <img src={imgComplemento} alt="" className='absolut' data-aos="fade-up"/>
                <div className="boxText" data-aos="fade-up">
                    <div className="titles">
                        <h1 >Saúde Mental <br /> Protegida</h1>
                        <h2>Sua vida em constante evolução.</h2>
                    </div>
                    <p>Atendimento psicológico on-line: acolhimento e cuidado emocional no conforto do seu lar.</p>
                    <a href="" className="buttonAgendarWhite">Agendar minha consulta</a>
                </div>
                <img src={imgComplemento} alt="" className='block' data-aos="fade-up" />
            </div>
        </section>
    </>
  )
}
