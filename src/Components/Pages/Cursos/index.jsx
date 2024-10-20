import React from 'react'
import SectionACursos from './SectionACursos'
import SectionBCursos from './SectionBCursos'

const Cursos = () => {
    return (
        <section className='cursos' style={{marginTop: "120px"}}>
            <>
                <SectionACursos />
                <SectionBCursos />
            </>
        </section>
    )
}

export default Cursos