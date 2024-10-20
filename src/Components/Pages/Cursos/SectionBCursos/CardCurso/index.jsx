import React from 'react'
import './cardcurso.css'

const CardCurso = (props) => {
  return (
    <div className='cardcurso'>
        <div className='cardcurso-icone'>
            <img src={props.icone} alt="icone do curso" />
        </div>
        <div className="cardcurso-textos">
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
        </div>
    </div>
 )
}

export default CardCurso