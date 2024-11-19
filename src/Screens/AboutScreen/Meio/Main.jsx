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
                <div className="boxTitle">
                    <h1>O que é a <span>Umbrella</span></h1>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima natus accusamus quia? Molestias sit voluptatum aliquam cupiditate. Eos quidem debitis ex adipisci voluptas, nihil architecto recusandae earum doloribus enim vitae!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas incidunt, accusantium tempora necessitatibus ut quod eos perspiciatis sit! Impedit sit quasi officiis alias dolor error corrupti totam quod suscipit expedita.
                        </p>
                    </div>
                </div>
            <img src={imgMaos} alt="" />
            </div>
            
            <div className="containerBox">
                <div className="box1 box">
                    <img src={imgFlecha} alt="" />
                    <h2>Missão</h2>
                    <p>Promover o bem-estar psicológico e emocional oferecendo suporte terapêutico de excelência.</p>
                </div>
                <div className="box2 box">
                    <img src={imgOlho} alt="" />
                    <h2>Visão</h2>
                    <p>Ser agentes de transformação de vidas ao expandir o acesso ao cuidado psicológico, contribuindo para uma sociedade mais consciente e saudável emocionalmente.</p>
                </div>
                <div className="box3 box">
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
