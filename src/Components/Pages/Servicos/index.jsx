import React from 'react'
import img001 from '../../../Images/Manutencao.jpg'
import './manutencao.css'
import QuadroInfo from '../../QuadroInfo'

const Servicos = () => {
  return (
    <section className="manutencao">
      <img src={img001} alt="Imagem manutencao" />
      <p>No momento estamos passando por alguns ajustes, volte mais tarde, ja teremos corrigido!</p>
    </section>
  )
}

export default Servicos