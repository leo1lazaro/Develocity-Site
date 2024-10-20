import React from 'react';
import './sectionacursos.css';

const SectionACursos = () => {
  return (
    <section className="sectionacursos">
        <div className="sectionacursos-textos-esquerda">
            <span>Sua carreira de sucesso</span>
            <h3>Começa aqui</h3>
        </div>
        <div className="sectionacursos-textos-direita">
            <span>Estude gratuitamente</span>
            <h3>Não perca tempo</h3>
            <div className="sectionacursos-textos-direita-destaque">
                <p>#VempraDevelocity</p>
            </div>
        </div>
    </section>
  )
}

export default SectionACursos