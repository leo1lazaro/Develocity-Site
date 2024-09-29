import React, { useState, useContext } from 'react';
import './navbar.css';
import imgLogo from '../../Images/LOGO D.png';
import PaginaAtualContext from '../../Contexts/PaginaAtualContext';

function Navbar() {
  const {setPaginaAtual} = useContext(PaginaAtualContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <section className='navbar'>
      <img src={imgLogo} alt='Logo' style={{ width: '90px', borderRadius: '50px' }} />
      <div className={`links ${menuOpen ? 'active' : ''}`}>
        <a href='#1' onClick={() => setPaginaAtual('home')}>Início</a>
        <a href='#2' onClick={() => setPaginaAtual('quemSomos')}>Quem somos</a>
        <a href='#3' onClick={() => setPaginaAtual('Servicos')}>Serviços</a>
        <a href='#4' onClick={() => setPaginaAtual('contatos')}>Contatos</a>
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default Navbar;
