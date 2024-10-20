import React from 'react';
import './quadroinfo.css';
import img001 from '../../Images/calendario.png';
import img002 from '../../Images/relogio.png';

const QuadroInfo = (props) => {
    return (
        <section className='quadro-info'>
            <div className="quadro-info-data">
                <img src={img001} alt="Imagem de um calendário" />
                <div className="quadro-info-data-textos">
                    <span>Data de criação:</span>
                    <p>{props.dataCriacao}</p>
                </div>
            </div>
            <div className="quadro-info-duracao">
                <img src={img002} alt="Imagem de um relógio" />
                <div className="quadro-info-duracao-textos">
                    <span>Carga horária:</span>
                    <p>{props.duracao}</p>
                </div>
            </div>
        </section>
    )
}

export default QuadroInfo