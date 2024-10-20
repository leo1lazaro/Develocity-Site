import React from 'react'
import './sectionbcursos.css'
import CardCurso from './CardCurso';
import arrCursos from '../../../../BDfake/BdFakeCursos'

const SectionBCursos = () => {
    return (
    <section className="sectionbcursos">
        <div className='sectionbcursos-titulo'>
            <h2>CONHEÇA OS NOSSOS CURSOS</h2>
        </div>
        <div className='sectionbcursos-cursos'>
            {arrCursos.map(curso =>{
                return(
                    <CardCurso
                        icone={curso.icone} 
                        nome={curso.nome} 
                        descricao={curso.descricao} />
                    )
            })}
        </div>
    </section>
  )
}

export default SectionBCursos