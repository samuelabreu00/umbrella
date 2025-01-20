import React from 'react'
import './Especialidades.css'
import iconPsicologia from '../../assets/iconPsicologia.png'
import iconPsiquiatria from '../../assets/iconPsiquiatria.png'
import iconNutrição from '../../assets/iconNutrição.png'

export const Especialidades = () => {
  return (
    <>
    <section className="especialidades">
        <div className="containerEspecialidades">
            <h1 data-aos="fade-up">Especialidades</h1>

            <div className="itensEspecialidade" data-aos="fade-up">
                <div className="content">
                    <div className="box">
                        <img src={iconPsicologia} alt="" />
                        <h2>Psicologia</h2>
                    </div>
                    <p>Nossos psicólogos são qualificados tanto para o tratamento de transtornos específicos, como também para atender pessoas que buscam ajuda na compreensão e no enfrentamento de questões emocionais, comportamentais e relacionais. 
                    </p>
                </div>
                
    
                <div className="content">
                    <div className="box">
                        <img src={iconNutrição} alt="" />
                        <h2>Nutrição</h2>
                    </div>
                    <p>O nutricionista da Umbrella é responsável por orientar hábitos alimentares, considerando as necessidades individuais. Os nutrientes adequados são fundamentais para o bom funcionamento do cérebro, regulando os neurotransmissores como serotonina e dopamina, que impactam o humor e o comportamento, assim como, questões psicológicas podem afetar os hábitos alimentares, ou seja, a relação entre nutrição e psicologia permite uma abordagem mais completa.</p>
                </div>

                <div className="content breve" >
                <h1 className="textAbsolut">EM BREVE</h1>
                    <div className="box">
                        <img src={iconPsiquiatria} alt="" />
                        <h2>Psiquiatria</h2>
                    </div>
                    <p>A psiquiatria é uma área médica voltada para o diagnóstico, tratamento e prevenção de transtornos mentais. Os médicos psiquiatras avaliam aspectos biológicos, psicológicos e sociais das condições, podendo prescrever medicamentos e indicar outros tratamentos, como a psicoterapia.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
