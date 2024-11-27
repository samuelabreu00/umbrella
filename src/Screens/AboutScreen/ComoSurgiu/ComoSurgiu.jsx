import React from 'react'
import './ComoSurgiu.css'
import imgLuane from '../../../assets/imgLuane.png'
import imgRoxo from '../../../assets/formaRoxo2.png'
import imgGuardaChuva from '../../../assets/absolutimg1.png'
import imgLinha from '../../../assets/absolutimg2.png'


export const ComoSurgiu = () => {
  return (
   <>
    <section className="surgiu">
        <div className="containerSurgiu">
        <div className="right" data-aos="fade-up">
            <img src={imgRoxo} alt="" />
                <h1>Como surgiu?</h1>
                <p>A <span className='bold'>Umbrella</span> surgiu a partir do desejo da <span className='orange'>psicóloga Luane Veras</span>, de tornar a vida das pessoas mais saudável em todos os aspectos. Após observar que seus pacientes tinham evoluções consideráveis com as sessões de terapia e também da alta demanda pela procura do seu trabalho e da limitação do seu tempo, a mesma considerou a possibilidade de juntar profissionais excelentes para atendimento psicológico, caminhando com ela, na mesma visão. Além do atendimento em psicoterapia, Luane sabe da importância de um cuidado ainda mais abrangente, onde mente, corpo e propósito de vida conversam entre si, foi aí onde surgiu a ideia de fazer o ecossistema “umbrella mental” para que esses pacientes possam experimentar de um cuidado de excelência em todos os sentidos. </p>
             
            </div>
            <img src={imgLuane} alt="" data-aos="fade-up"/>
           
        </div>
        <img src={imgGuardaChuva} alt="" className='absolut' />
        <img src={imgLinha} alt="" className='absolut2' />
        <img src={imgGuardaChuva} alt="" className='absolut3' />
    </section>
   </>
  )
}
