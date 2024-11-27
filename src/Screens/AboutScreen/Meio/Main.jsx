import React from 'react'
import './main.css'
import imgFlecha from '../../../assets/ícones-01.png'
import imgOlho from '../../../assets/ícones-02.png'
import imgDiamante from '../../../assets/ícones-03.png'
import imgMaos from '../../../assets/imgright.png'

export const Main = () => {
  return (
    <>
    <section className="main">
      
        <div className="containerMain">
            <div className="flex">
                <div className="boxTitle" data-aos="fade-up">
                    <h1>O que é a <span>Umbrella</span></h1>
                    <div className="text">
                        <p>Ecossistema de saúde mental para pessoas e negócios que buscam atendimento para melhorar suas habilidades emocionais, sociais e empresariais, transformando o bem-estar psicológico em um diferencial para o avanço e equilíbrio de suas vidas e organizações. <br />
                   
                        </p>
                    </div>
                </div>
            <img src={imgMaos} alt="" data-aos="fade-up"/>
            </div>
            
            <div className="containerBox">
                <div className="box1 box" data-aos="fade-up">
                    <img src={imgFlecha} alt="" />
                    <h2>Missão</h2>
                    <p>Promover o bem-estar psicológico e emocional oferecendo suporte terapêutico de excelência.</p>
                </div>
                <div className="box2 box" data-aos="fade-up">
                    <img src={imgOlho} alt="" />
                    <h2>Visão</h2>
                    <p>Ser agentes de transformação de vidas ao expandir o acesso ao cuidado psicológico, contribuindo para uma sociedade mais consciente e saudável emocionalmente.</p>
                </div>
                <div className="box3 box" data-aos="fade-up">
                    <img src={imgDiamante} alt="" />
                    <h2>Valores</h2>
                    <p>Ética, crescimento, desenvolvimento e excelência.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
