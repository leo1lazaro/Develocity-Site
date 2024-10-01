import './sectionc.css';
import Botao from '../../../Botao';
import img001 from '../../../../Images/img_orçamento.png'

import React from 'react'

const SectionC = () => {
  return (
    <section className='section-c-home'>
      <div className='section-c-home-img'>
        <img src={img001} alt="imagem orçamento" />
      </div>
      <div className='section-c-home-textos'>
        <h2 className='section-c-home-textos-titulo'>Solicitação de Orçamento</h2>
        <p className='section-c-home-textos-paragrafo'>Estamos construindo a nova infraestrutura tecnológica para médias e grandes empresas no Brasil. Através de consultoria, diagnóstico e auditoria ajudamos empresas a serem mais eficientes e organizadas. Com nosso suporte técnico em informatica e TI, remoto ou presencial, reduzimos os custos em suas operações tecnológicas.</p>
        <Botao texto='Fale conosco' />
      </div>
    </section>
  )
}

export default SectionC