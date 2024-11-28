import React, { useRef, useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import logoRoxa from '../../assets/logoRoxo.png';
import './Form.css';
import 'react-toastify/dist/ReactToastify.css'; // Importa o estilo

export const Cadastro = () => {
  const form = useRef();
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const isFormValid = () => {
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const birthdate = formData.get('birthdate');
    const message = formData.get('mensage');
    const country = formData.get('moradia_pais');
    const city = formData.get('moradia_cidade');
    const phone = formData.get('telefone');
    const cpf = formData.get('cpf');
    const email = formData.get('email');
    const horario = formData.get('horario');
    
    return name && birthdate && message && country && city && phone && cpf && email && horario;
  };

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
      }
    };

    fetchPaises();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    mensage: '',
    moradia_pais: '',
    moradia_cidade: '',
    telefone: '',
    cpf: '',
    email: '',
    horario: 'manhã',
    diasAtendimento: [],
    investimento: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Evitar o envio automático do formulário
    
    if (!formData.name || !formData.mensage || !formData.email || formData.diasAtendimento.length === 0) {
      toast.error('Por favor, preencha todos os campos obrigatórios.'); // Usando Toastify
      return;
    }

    setLoading(true); // Iniciar o estado de carregamento
    
    const dadosParaEnviar = {
      ...formData,
      diasAtendimento: formData.diasAtendimento.join(', '),
    };

    emailjs
      .send('gmailMensage', 'template_prdixfp', dadosParaEnviar, 'hnKo67_lMLCletrBg')
      .then(
        () => {
          setLoading(false);
          toast.success('Dados enviados com sucesso!'); // Usando Toastify
          setStep(1);
        },
        (error) => {
          console.error('Erro ao enviar:', error.text);
          toast.error('Falha ao enviar o email. Tente novamente.'); // Usando Toastify
          setLoading(false);
        }
      );
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (isFormValid()) {
        setStep(step + 1);
      } else {
        toast.error('Por favor, preencha todos os campos obrigatórios.'); // Usando Toastify
      }
    } else if (step === 2) {
      const checkbox = document.querySelector('input[type="checkbox"]');
      if (!checkbox.checked) {
        toast.error('Você precisa concordar com as diretrizes para prosseguir.'); // Usando Toastify
        return;
      } else {
        setStep(step + 1);
      }
    } else if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleDiaChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const newDias = prevState.diasAtendimento.includes(value)
        ? prevState.diasAtendimento.filter(dia => dia !== value)
        : [...prevState.diasAtendimento, value];
      return { ...prevState, diasAtendimento: newDias };
    });
  };

  const handleInvestmentChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      investimento: checked
        ? [...prevState.investimento, value]
        : prevState.investimento.filter((item) => item !== value),
    }));
  };

  return (
    <>
      <section className="form">
      
        <div className="text">
          <h1>Olá! Somos a Umbrella Mental Clinical</h1>
          {step === 1 && (
            <>
              <h2>Está buscando por um atendimento de excelência em psicologia?</h2>
              <p>Preencha o formulário abaixo, temos uma equipe técnica formada por profissionais especializados, éticos e experientes. <br /> Encaminharemos você para o profissional que se adeque melhor ao atendimento e acompanhamento da sua demanda.</p>
            </>
          )}
          {step === 2 && (
            <>
              <h2>Estamos quase lá, por favor, continue preenchendo os dados!</h2>
              <p>Preencha as informações adicionais para completar seu cadastro. Sua saúde mental é importante para nós.</p>
            </>
          )}
          {step === 3 && (
            <>
              <h2>Pronto para enviar?</h2>
              <p>Revise os dados preenchidos e clique em "Enviar" para completar o seu cadastro.</p>
            </>
          )}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="containerImg">  <img src={logoRoxa} alt="" /></div>
      
          {step === 1 && (
            <>
              <div className="left">
                <div className="box">
                  <label htmlFor="name">Nome Completo<sup>*</sup></label>
                  <input type="text" name="name" id="name" required   value={formData.name}
            onChange={handleChange}/>
                </div>

                <div className="box">
                  <label htmlFor="birthdate">Data de Nascimento<sup>*</sup></label>
                  <input type="date" name="birthdate" id="birthdate" required    value={formData.birthdate}
            onChange={handleChange}/>
                </div>

                <div className="box">
                  <label htmlFor="mensage">Motivo do acompanhamento psicológico<sup>*</sup></label>
                  <textarea name="mensage" id="mensage" placeholder="Sua mensagem" required    value={formData.mensage}
            onChange={handleChange}/>
                </div>

                <div className="box">
                  <label>Qual turno você teria disponibilidade para o atendimento?<sup>*</sup></label>
                  <div className="grupo">
                    <input type="radio" id="radio_manha" name="horario" value="manhã" defaultChecked  checked={formData.horario === 'manhã'}
              onChange={handleChange}/>
                    <label htmlFor="radio_manha" className='dia'>Manhã</label>
                  </div>
                  <div className="grupo">
                    <input type="radio" id="radio_tarde" name="horario" value="tarde" checked={formData.horario === 'tarde'}
              onChange={handleChange}/>
                    <label htmlFor="radio_tarde" className='dia'>Tarde</label>
                  </div>
                  <div className="grupo">
                    <input type="radio" id="radio_noite" name="horario" value="noite" checked={formData.horario === 'noite'}
              onChange={handleChange}/>
                    <label htmlFor="radio_noite" className='dia'>Noite</label>
                  </div>
                </div>


                <div className="box">
  <label>Qual o melhor dia para atendimento? (marque todas as alternativas aplicáveis)<sup>*</sup></label>
  {['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Todos os dias'].map((dia, index) => (
    <div key={index} className="grupo">
      <input
        type="checkbox"
        id={`check_${index}`}
        name="dia"
        value={dia}
        checked={formData.diasAtendimento.includes(dia)}
        onChange={handleDiaChange}
      />
      <label htmlFor={`check_${index}`} className='dia'>{dia}</label>
    </div>
  ))}
</div>

              </div>



              <div className="right">
                <div className="box">
                  <label htmlFor="moradia">Que país você mora?<sup>*</sup></label>
                  <select name="moradia_pais" id="moradia" defaultValue="" required  value={formData.moradia_pais}
            onChange={handleChange}>
                    <option value="" disabled>Selecione um país</option>
                    {paises.map((pais, index) => (
                      <option key={index} value={pais}>{pais}</option>
                    ))}
                  </select>
                </div>

                <div className="box">
                  <label htmlFor="moradia_cidade">Qual cidade você mora?<sup>*</sup></label>
                  <input type="text" name="moradia_cidade" id="moradia_cidade" required    value={formData.moradia_cidade}
            onChange={handleChange}/>
                </div>

                <div className="box">
                  <label htmlFor="telefone">Seu Whatsapp<sup>*</sup></label>
                  <InputMask mask="(99) 99999-9999" name="telefone" id="telefone" placeholder="(00) 00000-0000" required    value={formData.telefone}
            onChange={handleChange}/>
                </div>

                <div className="box">
                  <label htmlFor="cpf">Seu CPF<sup>*</sup></label>
                  <InputMask mask="999.999.999-99" name="cpf" id="cpf" placeholder="000.000.000-00" required    value={formData.cpf}
            onChange={handleChange}/>
                </div>

                <div className="box">
                  <label htmlFor="email">Seu melhor email<sup>*</sup></label>
                  <input type="email" name="email" id="email" required    value={formData.email}
            onChange={handleChange}/>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
            <div className="containerTela2">
            <p><span><span className='bold'>Atenção!</span> Se você está buscando um atendimento emergencial ou está necessitando de cuidado imediato, ligue para o 188 (Ministério da Saúde em parceria com o Centro de Valorização da Vida - CVV) ou dirija-se à unidade de saúde mais próxima.</span> <br /><br /> A UMBRELLA não presta assistência emergencial ou de caráter imediato.
Agradecemos pela compreensão.
Você está assegurado pela Lei Geral de Proteção de Dados Pessoais (Lei n° 13.709/2018 - LGPD).
Seus dados serão utilizados unicamente para fins de comunicação, envio de informações sobre nossos serviços, emissão de faturas quando houver contratação, verificação e atualização dos seus dados pessoais, além de oferecer uma experiência personalizada.
Eles serão armazenados de maneira segura e criptografada, com acesso restrito a pessoas autorizadas, minimizando qualquer risco de exposição.</p>
              <div className="check"><input type="checkbox" name="" id="" required/>
              <label htmlFor="">Li e concordo com as diretrizes.</label></div>
            </div>
             
              
            </>
          )}

{step === 3 && (
  <div className="right">
    <div className="contentBoxForm">
    <h1>Quanto você está disposto a investir?</h1>
      <div className="boxForm">
      

      <div className="grupo">
  <input
    type="checkbox"
    name="investimento"
    value="R$127,00 cada sessão ou 4 sessões R$427,00"
    onChange={handleInvestmentChange}
  />
  <label htmlFor="investimento">R$127,00 cada sessão ou 4 sessões R$427,00</label>
</div>

<div className="grupo">
  <input
    type="checkbox"
    name="investimento"
    value="R$197,00 cada sessão ou 4 sessões R$667,00"
    onChange={handleInvestmentChange}
  />
  <label htmlFor="investimento">R$197,00 cada sessão ou 4 sessões R$667,00</label>
</div>

<div className="grupo">
  <input
    type="checkbox"
    name="investimento"
    value="R$297,00 cada sessão ou 4 sessões R$997,00"
    onChange={handleInvestmentChange}
  />
  <label htmlFor="investimento">R$297,00 cada sessão ou 4 sessões R$997,00</label>
</div>

<div className="grupo">
  <input
    type="checkbox"
    name="investimento"
    value="R$497,00 cada sessão ou 4 sessões R$1.667,00"
    onChange={handleInvestmentChange}
  />
  <label htmlFor="investimento">R$497,00 cada sessão ou 4 sessões R$1.667,00</label>
</div>
    </div>

    </div>
   
    <div className="buttonContainer">
      <input
        type="submit"
        value="Enviar"
        className="button"
        onClick={sendEmail} // Enviar dados apenas na última etapa
      />
    </div>
  </div>
)}
<div className="buttons">

        {step > 1 && (
            <div className="buttonContainer">
              <button type="button" className="button" onClick={handlePreviousStep}>
                Anterior
              </button>
            </div>
          )}

          {step < 3 && (
            <div className="buttonContainer">
              <button type="button" className="button" onClick={handleNextStep}>
                Seguinte
              </button>
            </div>
          )}

        
</div>
          
        </form>
      </section>

           {/* Tela de carregamento */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <span>Carregando...</span>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};
