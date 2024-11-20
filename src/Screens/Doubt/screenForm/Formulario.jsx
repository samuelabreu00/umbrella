import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'

export const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validação dos campos do formulário
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const message = formData.get('mensage');

    if (!name || !message) {
      // Mensagem de erro para campos vazios
      toast.error('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    // Enviar email se todos os campos estiverem preenchidos
    emailjs
      .sendForm('gmailMensage', 'template_prdixfp', form.current, 'hnKo67_lMLCletrBg')
      .then(
        () => {
          toast.success('Email enviado com sucesso!');
        },
        (error) => {
          console.error('Erro ao enviar:', error.text);
          toast.error('Falha ao enviar o email. Tente novamente.');
        }
      );
  };

  return (
    <>
    <section className="form">
      <form ref={form} onSubmit={sendEmail}>
          <div className="box">
            <label>Nome Completo</label>
            <input type="text" name="name"  />
          </div>

          <div className="box">
            <label>Data de Nascimento</label>
            <input type='date' name='telefone' />
          </div>
      

          <div className="box">
            <label>Motivo do acompanhamento psicológico</label>
            <textarea name="mensage" placeholder="Sua mensagem" />
          </div>

          <div className="box">
            <label>Qual turno você teria disponibilidade para o atendimento?</label>

            <div className="grupo">
              <input type="radio" id="radio" name="horario" value="manhã" checked />
              <label htmlForfor="radio">Manhã</label>
            </div>
         
            <div className="grupo"><input type="radio" id="radio" name="horario" value="tarde" checked />
            <label htmlForfor="radio">Tarde</label></div>
            
            <div className="grupo">   <input type="radio" id="radio" name="horario" value="noite" checked />
            <label htmlForfor="radio">Noite</label></div>
         
          </div>
         
         <div className="box">
            <label>QUAL MELHOR DIA DA SEMANA PRO SEU ATENDIMENTO? SE VOCÊ PODE MAIS DE UM DIA, MARQUE TODAS AS ALTERNATIVAS QUE VOCÊ TERIA DISPONIBILIDADE.</label>


            <div className="grupo"><input type="checkbox" id="check" name="dia" value='segunda feira'/>
            <label htmlForfor="check">Segunda-feira</label></div>
            
            <div className="grupo"><input type="checkbox" id="check" name="dia" value='terça feira'/>
            <label htmlForfor="check">Terça-feira</label></div>
            
            <div className="grupo"> <input type="checkbox" id="check" name="dia" value='quarta feira'/>
            <label htmlForfor="check">Quarta-feira</label></div>
           
            <div className="grupo"><input type="checkbox" id="check" name="dia" value='quinta feira'/>
            <label htmlForfor="check">Quinta-feira</label></div>
            
            <div className="grupo"><input type="checkbox" id="check" name="dia" value='sexta feira'/>
            <label htmlForfor="check">Sexta-feira</label>
</div>
            
            <div className="grupo"><input type="checkbox" id="check" name="dia" value='sabado'/>
            <label htmlForfor="check">Sábado</label>
</div>

            <div className="grupo"> <input type="checkbox" id="check" name="dia" value='todos os dias'/>
            <label htmlForfor="check">TENHO DISPONIBILIDADE EM TODOS OS DIAS (OU MARQUE CONFORME SUA DISPONIBILIDADE).</label></div>
           

         </div>

         <div className="box">
            <label>Onde você mora?</label>
            <input type="text" name='moradia' />
         </div>


         <div className="box">
            <label>Seu Whatsapp </label>
            <input type="tel" name='telefone' />
         </div>

         
         <div className="box">
            <label>Seu melhor email</label>
            <input type="text" name='email' />
         </div>

         <div className="box">
            <label>Seu melhor email</label>
            <input type="text" name='email' />
         </div>
         
          <input type="submit" value="Send" />
      </form>
    </section>
      <ToastContainer />
    </>
  );
};
