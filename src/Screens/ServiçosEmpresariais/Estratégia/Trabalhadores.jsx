import React from 'react'
import './Trabalhadores.css'
import { ButtonReuniao } from '../../../components/ButtonReuniao/ButtonReuniao'
import imgTrabalhadores from '../../../assets/imgTrabalhadorew.png'

export const Trabalhadores = () => {
  return (
    <>
    <section className="trabalhadores">
        <div className="containerTrabalhadores">
         
            <div className="titles">
                <h1>Cerca de <span>15% dos trabalhadores</span> adultos no mundo sofrem de transtornos mentais.</h1>
                <h2>Identifique esses desafios na sua empresa e aumente sua performance</h2>
            </div>

            <div className="transtornos">
                <div className="flex">
                    <div className="box">
                        <div className='wrap'>
                            <p>Aplicação de testes</p>
                            <p>Software de performance da equipe</p>
                        </div>
                        <div className='wrap'>
                            <p>Palestras corporativas</p>
                            <p>Programas de prevenção</p>
                        </div>   
                    </div>
                    <img src={imgTrabalhadores} alt="" />
                </div>
            </div>

            <ButtonReuniao/>

            <div className="titles">
                <h1>O que vamos oferecer para <span> aumentar a performance</span> da sua empresa</h1>
            </div>

            <div className="cards">
                <div className="card1 card">Ambiente saudável entre os colaboradores</div>
                <div className="card2 card">Eletrônica operacional e resultados palpáveis de sua equipe</div>
                <div className="card3 card">Colaboradores mais engajados com a cultura da empresa</div>
                <div className="card4 card">Entrega de demandas com eficácia</div>
                <div className="card5 card">Resultados financeiros palpáveis com o avanço da sua equipe</div>
            </div>

            <div className="containerForm">
                <form action="">
                    <div className="box">
                        <label htmlFor="">Nome Completo</label>
                        <input type="text" />
                    </div>

                    <div className="box">
                        <label htmlFor="">E-mail profissional </label>
                        <input type="text" />
                    </div>

                    <div className="box">
                        <label htmlFor="">Seu WhatsApp</label>
                        <input type="tel" />
                    </div>

                    <div className="box">
                        <label htmlFor="">Qual seu cargo?</label>
                        <input type="text" />
                    </div>

                    <div className="box">
                        <label htmlFor="">Qual o nome da sua empresa?</label>
                        <input type="text" />
                    </div>

                    <div className="box">
                        <label htmlFor="">Quantos funcionários tem na sua empresa?</label>
                        <input type="text" />
                    </div>

                    <input type="submit" value="Enviar" />
                </form>
            </div>
            
        </div>
    </section>
    </>
  )
}
