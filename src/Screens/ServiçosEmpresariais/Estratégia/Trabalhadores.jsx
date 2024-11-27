import React from 'react'
import imgLogo from '../../../assets/logoHeader.png'
import './Trabalhadores.css'
import { ButtonReuniao } from '../../../components/ButtonReuniao/ButtonReuniao'
import imgTrabalhadores from '../../../assets/imgTrabalhadorew.png'
import Acordion from './Acordion/Acordion'


export const Trabalhadores = () => {
  return (
    <>
    <section className="trabalhadores">
        <div className="containerTrabalhadores">
         
            <div className="titles" data-aos="fade-up">
                <h1>Descubra o Diferencial que Pode Transformar a Performance e o Faturamento da Sua Empresa
                </h1>
                <h2>Vamos além do diagnóstico, somos seus parceiros estratégicos. Utilizamos os dados coletados para criar um plano de ação sob medida, mostrando exatamente onde estão os problemas e como solucioná-los de forma prática e eficaz. O resultado? Equipes mais engajadas e produtivas, e uma empresa com maior potencial de faturamento.</h2>
            </div>

            <section className="proposta" id='proposta'>
            <div className="container-proposta">
                <div className="content-proposta">
                    <Acordion
                    titulo="Testes Psicológicos Personalizados"
                    texto="Identificamos os principais desafios comportamentais e traçamos o perfil ideal para aumentar a produtividade."
                    />

                    <Acordion
                    titulo="Programas de Prevenção"
                    texto="Evitamos esgotamento, absenteísmo e rotatividade, promovendo ambientes mais saudáveis e sustentáveis."
                    />

                    <Acordion
                    titulo="Software de Performance"
                    texto="Uma tecnologia inovadora que mede em tempo real a saúde mental e o desempenho de sua equipe, oferecendo insight claros e práticos."
                    />

                    <Acordion
                    titulo="Palestras Corporativas"
                    texto="Momentos transformadores para inspirar, desenvolver e alinhar colaboradores aos objetivos estratégicos da empresa."
                    />

                </div>
                <img src={imgTrabalhadores} alt="" />
            </div>
        </section>

            <ButtonReuniao/>

            <div className="titles" data-aos="fade-up">
                <h1>O que vamos oferecer para <span> aumentar a performance</span> da sua empresa</h1>
            </div>

            <div className="cards">
                <div className="card1 card" data-aos="fade-up">Ambiente saudável entre os colaboradores</div>
                <div className="card2 card" data-aos="fade-up">Eletrônica operacional e resultados palpáveis de sua equipe</div>
                <div className="card3 card" data-aos="fade-up">Colaboradores mais engajados com a cultura da empresa</div>
                <div className="card4 card" data-aos="fade-up">Entrega de demandas com eficácia</div>
                <div className="card5 card" data-aos="fade-up">Resultados financeiros palpáveis com o avanço da sua equipe</div>
            </div>

            <div className="containerForm" data-aos="fade-up">
            <h1>Se você quer transformar sua empresa e <span>desbloquear um novo nível de faturamento</span>, entre em contato agora. Vamos mostrar como a Umbrella Mental pode ser o ponto de virada no <span>sucesso do seu negócio</span>. O <span>futuro da sua empresa</span> começa com uma decisão hoje!
            </h1>
                <form action=""> 
                    <div className="logo"><img src={imgLogo} alt="" /></div>
                    
                    
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
