import React, { useRef, useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

export const Cadastro = () => {
  const form = useRef();
  const [paises, setPaises] = useState([]);

  // Função para buscar os países da API
  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const sortedPaises = data
          .map((pais) => pais.name.common)
          .sort(); // Ordenar alfabeticamente
        setPaises(sortedPaises);
      } catch (error) {
        console.error('Erro ao carregar países:', error);
        toast.error('Falha ao carregar a lista de países.');
      }
    };

    fetchPaises();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

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
            <label htmlFor="name">Nome Completo<sup>*</sup></label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="box">
            <label htmlFor="birthdate">Data de Nascimento<sup>*</sup></label>
            <input type="date" name="birthdate" id="birthdate" />
          </div>

          <div className="box">
            <label htmlFor="mensage">Motivo do acompanhamento psicológico<sup>*</sup></label>
            <textarea name="mensage" id="mensage" placeholder="Sua mensagem" />
          </div>

          <div className="box">
            <label>Qual turno você teria disponibilidade para o atendimento?<sup>*</sup></label>
            <div className="grupo">
              <input type="radio" id="radio_manha" name="horario" value="manhã" defaultChecked />
              <label htmlFor="radio_manha" className='dia'>Manhã</label>
            </div>
            <div className="grupo">
              <input type="radio" id="radio_tarde" name="horario" value="tarde" />
              <label htmlFor="radio_tarde" className='dia'>Tarde</label>
            </div>
            <div className="grupo">
              <input type="radio" id="radio_noite" name="horario" value="noite" />
              <label htmlFor="radio_noite" className='dia'>Noite</label>
            </div>
          </div>

          <div className="box">
            <label>Qual o melhor dia para atendimento? (marque todas as alternativas aplicáveis)<sup>*</sup></label>
            {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Todos os dias'].map((dia, index) => (
              <div key={index} className="grupo">
                <input type="checkbox" id={`check_${index}`} name="dia" value={dia} />
                <label htmlFor={`check_${index}`} className='dia'>{dia}</label>
              </div>
            ))}
          </div>

          <div className="box">
            <label htmlFor="moradia">Que país você mora?<sup>*</sup></label>
            <select name="moradia_pais" id="moradia" defaultValue="">
              <option value="" disabled>Selecione um país</option>
              {paises.map((pais, index) => (
                <option key={index} value={pais}>{pais}</option>
              ))}
            </select>
          </div>

          <div className="box">
            <label htmlFor="moradia_cidade">Qual cidade você mora?<sup>*</sup></label>
            <input type="text" name="moradia_cidade" id="moradia_cidade" />
          </div>

          <div className="box">
            <label htmlFor="telefone">Seu Whatsapp<sup>*</sup></label>
            <InputMask
              mask="(99) 99999-9999"
              name="telefone"
              id="telefone"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="box">
            <label htmlFor="cpf">Seu CPF<sup>*</sup></label>
            <InputMask
              mask="999.999.999-99"
              
              name="cpf"
              id="cpf"
              placeholder="000.000.000-00"
            />
          </div>

          <div className="box">
            <label htmlFor="email">Seu melhor email<sup>*</sup></label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="buttonContainer">
            <input type="submit" value="Enviar" className="button" />
          </div>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};
