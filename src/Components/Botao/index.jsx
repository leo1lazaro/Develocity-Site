import React from 'react'
import './botao.css'

const Botao = ({texto}) => {
  return (
    <button className='botao-laranja'>
        {texto}
    </button>
  )
}

export default Botao