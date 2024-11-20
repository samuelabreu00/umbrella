import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

export const Cadastro = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validação dos campos do formulário
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const message = formData.get('mensage');
    const email = formData.get('email');

    if (!name || !message || !email) {
      toast.error('Por favor, preencha todos os campos obrigatórios antes de enviar.');
      return;
    }

    emailjs
      .sendForm('gmailMensage', 'template_prdixfp', form.current, 'hnKo67_lMLCletrBg')
      .then(
        () => toast.success('Email enviado com sucesso!'),
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
            <label htmlFor="name">Nome Completo</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="box">
            <label htmlFor="birthdate">Data de Nascimento</label>
            <input type="date" name="birthdate" id="birthdate" />
          </div>

          <div className="box">
            <label htmlFor="mensage">Motivo do acompanhamento psicológico</label>
            <textarea name="mensage" id="mensage" placeholder="Sua mensagem" />
          </div>

          <div className="box">
            <label>Qual turno você teria disponibilidade para o atendimento?</label>
            <div className="grupo">
              <input type="radio" id="radio_manha" name="horario" value="manhã" defaultChecked />
              <label htmlFor="radio_manha">Manhã</label>
            </div>
            <div className="grupo">
              <input type="radio" id="radio_tarde" name="horario" value="tarde" />
              <label htmlFor="radio_tarde">Tarde</label>
            </div>
            <div className="grupo">
              <input type="radio" id="radio_noite" name="horario" value="noite" />
              <label htmlFor="radio_noite">Noite</label>
            </div>
          </div>

          <div className="box">
            <label>Qual o melhor dia para atendimento? (marque todas as alternativas aplicáveis)</label>
            {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Todos os dias'].map((dia, index) => (
              <div key={index} className="grupo">
                <input type="checkbox" id={`check_${index}`} name="dia" value={dia} />
                <label htmlFor={`check_${index}`}>{dia}</label>
              </div>
            ))}
          </div>

          <div className="box">
            <label htmlFor="moradia">Onde você mora?</label>
            <input type="text" name="moradia" id="moradia" />
          </div>

          <div className="box">
            <label htmlFor="telefone">Seu Whatsapp</label>
            <input type="tel" name="telefone" id="telefone" />
          </div>

          <div className="box">
            <label htmlFor="email">Seu melhor email</label>
            <input type="email" name="email" id="email" />
          </div>

          <input type="submit" value="Enviar" />
        </form>
      </section>
      <ToastContainer />
    </>
  );
};
