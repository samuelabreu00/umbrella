import React from 'react'
import './Demandas.css'
import { ButtonAgendarWhite } from '../../components/ButtonAgendarWhite/ButtonAgendarWhite'
import imgRelacionamentos from '../../assets/especialidades_Prancheta 1.png'
import imgProcrastinação from '../../assets/especialidades_Prancheta 1 cópia.png'
import imgAnsiedade from '../../assets/especialidades_Prancheta 1 cópia 2.png'
import imgDepressão from '../../assets/especialidades_Prancheta 1 cópia 3.png'
import imgBurnout from '../../assets/especialidades_Prancheta 1 cópia 4.png'
import imgSono from '../../assets/especialidades_Prancheta 1 cópia 5.png'


export const Demandas = () => {
  return (
    <>
    <section className="demandas">
        <div className="containerDemandas">
            <h1 data-aos="fade-up">Possíveis demandas que te levam a procurar um <span>profissional de psicologia da Umbrella</span></h1>

            <div className="box">
                <div className="left" data-aos="fade-up">
                    <h2>Relacionamentos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
                <img src={imgRelacionamentos} alt="" data-aos="fade-up"/>
            </div>

            <div className="box invert">
               
                <img src={imgProcrastinação} alt="" data-aos="fade-up"/>
                <div className="left" data-aos="fade-up">
                    <h2>Procrastinação</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
            </div>

            <div className="box">
                <div className="left" data-aos="fade-up">
                    <h2>Ansiedade</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
                <img src={imgAnsiedade} alt="" data-aos="fade-up"/>
            </div>

            <div className="box invert">
            <img src={imgDepressão} alt="" data-aos="fade-up"/>
                <div className="left" data-aos="fade-up">
                    <h2>Depressão</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
               
            </div>

            <div className="box">
                <div className="left" data-aos="fade-up">
                    <h2>Burnout</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
                <img src={imgBurnout} alt="" data-aos="fade-up"/>
            </div>

            <div className="box invert">
            <img src={imgSono} alt="" data-aos="fade-up"/>
                <div className="left" data-aos="fade-up">
                    <h2>Distúrbios do sono</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione numquam error eligendi necessitatibus cupiditate illo maxime <br /> provident corporis dolores, tenetur doloremque officia repellendus quaerat nostrum eos quisquam officiis quidem saepe.</p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
                
            </div>

            <div className="title"  data-aos="fade-up" >
                <h3>O que mais te aflinge?</h3>
                <h3><span>Temos o profissional certo para lhe ajudar</span></h3>
            </div>
        </div>
    </section>
    </>
  )
}
