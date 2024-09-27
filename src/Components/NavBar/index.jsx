import React from 'react'
import './navbar.css';
import imgLogo from '../../Images/LOGO D.png';


function Navbar() {
  return (
    <section className='navbar'>
        <img src={imgLogo} alt='' style={{width: '90px', borderRadius: '50px'}}/>
        <div className='links'>
            <a href='#1'>Inicio</a>
            <a href='#2'>Quem somos</a>
            <a href='#3'>Servicos</a>
            <a href='#4'>Contatos</a>
        </div>
    </section>
  )
}

export default Navbar