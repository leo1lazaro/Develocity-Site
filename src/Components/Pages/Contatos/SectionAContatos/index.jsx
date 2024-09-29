import React from 'react'
import './sectionacontatos.css'
import img001 from '../../../../Images/LOGO D.png'
import Botao from '../../../Botao';

const SectionAContatos = () => {
  return (
    <section className='section-a-contatos'>
      <div className="section-a-contatos-top">
        <h2 className='section-a-contatos-top-titulo'>Fale com a nossa equipe</h2>
        <p className='section-a-contatos-top-paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil enim blanditiis assumenda debitis dicta amet. Aliquid exercitationem laudantium, necessitatibus atque delectus, quibusdam explicabo est enim, quidem cum deserunt incidunt!</p>
      </div>
      <div className='section-a-contatos-corpo'>
        <img src={img001} alt="Logo Develocity" style={{ width: '320px' }} />
        <form className='section-a-contatos-corpo-form'>
          <div className='form-group'>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder='Digite seu nome...' />
          </div>
          <div className='form-group'>
            <label htmlFor="telefone">tel</label>
            <input type="tel" name="telefone" id="telefone" placeholder='Digite seu telefone...' />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Digite seu email...' />
          </div>
          <textarea className='msg' placeholder='Digite sua mensagem aqui...'></textarea>
          <Botao texto='Enviar' />
        </form>
      </div>
    </section>
  )
}

export default SectionAContatos