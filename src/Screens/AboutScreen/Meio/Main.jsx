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
                    <h2>Propósito</h2>
                    <p>Proporcionar proteção e evolução por meio da saúde mental, ajudando pessoas e empresas a alcançarem seu máximo potencial.</p>
                </div>
                <div className="box2 box" data-aos="fade-up">
                    <img src={imgOlho} alt="" />
                    <h2>Visão</h2>
                    <p>Ser referência global em soluções de saúde mental, transformando vidas e negócios com equilíbrio, inovação e impacto duradouro.</p>
                </div>
                <div className="box3 box" data-aos="fade-up">
                    <img src={imgDiamante} alt="" />
                    <h2>Valores</h2>
                    <p><div><span>Proteção</span>: Garantimos segurança emocional. <br /><span>Evolução</span>: Promovemos desenvolvimento contínuo e consciente. <br /><span>Equilíbrio</span>: Alinhamos saúde mental e alto desempenho. <br /> <span>Transformação</span>: Geramos mudanças reais e rigorosas. <br /><span>Responsabilidade</span>: Compromisso com o impacto positivo.</div></p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
