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
                    <p>Muitas pessoas precisam de ajuda para lidar com dificuldades de comunicação, conflitos familiares, desafios em vínculos afetivos, términos de relacionamentos e até mesmo vivência em relações abusivas. Esses processos podem surgir tanto em relações amorosas quanto familiares, amizades ou interações no trabalho.</p>

                    <p>Um profissional qualificado pode te ajudar a melhorar a comunicação e fortalecer sua autoestima e autoconhecimento, para lidar melhor com suas emoções e construir relações mais saudáveis e equilibradas.
                    </p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
                <img src={imgRelacionamentos} alt="" data-aos="fade-up"/>
            </div>

            <div className="box invert">
               
                <img src={imgProcrastinação} alt="" data-aos="fade-up"/>
                <div className="left" data-aos="fade-up">
                    <h2>Procrastinação</h2>
                    <p>A procrastinação é uma demanda comum que envolve o adiamento constante de tarefas importantes, muitas vezes substituídas por atividades menos urgentes. O ato de procrastinar pode estar relacionada à ansiedade, perfeccionismo, baixa autoestima, falta de motivação ou até mesmo, ao medo de errar. 
                    </p>

                    <p>Nossos profissionais poderão te ajudar a identificar gatilhos e padrões que sustentam esse comportamento e também trabalharão juntos no desenvolvimento de uma boa organização e foco.
                    </p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
            </div>

            <div className="box">
                <div className="left" data-aos="fade-up">
                    <h2>Ansiedade</h2>
                    <p>A ansiedade é um sentimento excessivo de preocupação, medo, inquietação… muitas vezes acompanhada por sintomas físicos como taquicardia, tensão muscular, pensamentos acelerados… a pessoa está sempre esperando que algo de ruim aconteça, mesmo que não haja motivo.</p>

                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
                <img src={imgAnsiedade} alt="" data-aos="fade-up"/>
            </div>

            <div className="box invert">
            <img src={imgDepressão} alt="" data-aos="fade-up"/>
                <div className="left" data-aos="fade-up">
                    <h2>Depressão</h2>
                    <p>Na depressão o indivíduo sente uma tristeza persistente, perda de interesse e prazer em atividades que antes ele costumava gostar e fazer habitualmente. Tudo começa a ficar mais pesado e sem tanto sentido… é uma condição que afeta a vida diária do ser humano, dificultando também em seus relacionamentos e afetando a produtividade, entre outros… é de total importância um acompanhamento psicológico.
                    </p>

                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
               
            </div>

            <div className="box">
                <div className="left" data-aos="fade-up">
                    <h2>Burnout</h2>
                    <p>O burnout é uma síndrome relacionada ao trabalho, uma resposta ao estresse exacerbado adquirido no contexto laboral. Uma manifestação de esgotamento emocional e físico, cansaço extremo, distanciamento emocional em relação às atividades e/ou colegas e baixa realização pessoal, como se seus esforços não fossem suficientes.
                    </p>
                      <ButtonAgendarWhite name='Agendar minha consulta' />
                </div>
                <img src={imgBurnout} alt="" data-aos="fade-up"/>
            </div>

            <div className="box invert">
            <img src={imgSono} alt="" data-aos="fade-up"/>
                <div className="left" data-aos="fade-up">
                    <h2>Distúrbios do sono</h2>
                    <p>
O cuidado com o sono é extremamente importante para que você tenha uma boa qualidade de vida, entre as dificuldades mais comuns estão a insônia, a apneia do sono, a hipersonia. Alguns sintomas comuns são, dificuldade para adormecer, sonolência excessiva durante o dia, sensação de cansaço mesmo após uma noite de descanso. Um psicólogo da Umbrella poderá te auxiliar de acordo com sua demanda e utilizar técnicas que te ajudarão a desenvolver uma rotina de sono saudável.
</p>

                    <p>Se identifica com alguma dessas demandas? Entre em contato conosco! E caso sua demanda não se encaixa nas descrições anteriores, não se preocupe! Entre em contato conosco, pois nossos profissionais são qualificados para atender exatamente aquilo que você está precisando.
                    </p>
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
