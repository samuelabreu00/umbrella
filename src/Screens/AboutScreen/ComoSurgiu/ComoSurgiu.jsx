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
        <div className="right">
            <img src={imgRoxo} alt="" />
                <h1>Como surgiu?</h1>
                <p>A <span className='bold'>Umbrella</span> surgiu do desejo da <span className='orange'>psicóloga Luane Veras</span> de tornar a vida das pessoas mais saudável em todos os aspectos por certa, observar que seus pacientes tinham evoluções consideráveis após suas sessões mas tinham uma queixa recorrente, eles falavam que estavam bem com suas evoluções psicológicas mas sentiam que precisavam de mais, foi ai onde surgiu a ideia de fazer o ecossistema da Umbrella para esses pacientes.  </p>
             
            </div>
            <img src={imgLuane} alt="" />
           
        </div>
        <img src={imgGuardaChuva} alt="" className='absolut' />
        <img src={imgLinha} alt="" className='absolut2' />
        <img src={imgGuardaChuva} alt="" className='absolut3' />
    </section>
   </>
  )
}
