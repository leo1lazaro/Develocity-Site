import React, { useContext } from 'react'
import './navbar.css';
import imgLogo from '../../Images/LOGO D.png';
import PaginaAtualContext from '../../Contexts/PaginaAtualContext'


function Navbar() {

  const {setPaginaAtual} = useContext(PaginaAtualContext)

  return (
    <section className='navbar'>
        <img src={imgLogo} alt='' style={{width: '90px', borderRadius: '50px'}}/>
        <div className='links'>
            <a href='#1' onClick={()=>setPaginaAtual('home')}>Inicio</a>
            <a href='#2' onClick={()=>setPaginaAtual('quemSomos')}>Quem somos</a>
            <a href='#3' onClick={()=>setPaginaAtual('Servicos')}>Servicos</a>
            <a href='#4' onClick={()=>setPaginaAtual('contatos')}>Contatos</a>
        </div>
    </section>
  )
}

export default Navbar