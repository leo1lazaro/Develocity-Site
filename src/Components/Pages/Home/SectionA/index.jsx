import React from 'react'
import './sectiona.css'
import CardsSectionAHome from './CardSectionAHome'
import img001 from '../../../../Images/ICON1.png'
import img002 from '../../../../Images/ICON2.png'
import img003 from '../../../../Images/ICON3.png'
import Botao from '../../../Botao'


function SectionA() {
  return (
    <section className='section-a-home'>
      <div className='section-a-home-itens'>
        <h2 className='home-itens-titulo'>Na Develocity</h2>
        <p className='home-itens-texto'>Trabalhamos com os melhores profissionais de tecnologia para os projetos da sua empresa</p>
        <Botao texto='Saiba mais'/>
      </div>
      <div className='cards-section-a-home'>
        <CardsSectionAHome img={img001} texto="Inovação Tecnológica" />
        <CardsSectionAHome img={img002} texto="Gestao e recuperação de dados" />
        <CardsSectionAHome img={img003} texto="Consultoria e planejamento TI" />
      </div>
    </section>
  )
}

export default SectionA