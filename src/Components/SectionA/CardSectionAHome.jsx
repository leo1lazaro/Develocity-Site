import React from 'react'
import './cardahome.css'

function CardsSectionAHome(props) {
  return (
    <div className='card-section-a-home'>
      <img src={props.img} alt="imagem do card"/>
      <p>{props.texto}</p>
    </div>
  )
}

export default CardsSectionAHome