import './sectionc.css';
import img001 from '../../Images/img_orçamento.png'

import React from 'react'

const SectionC = () => {
  return (
    <section className='section-c-home'>
        <div className='section-c-home-img'>
            <img src={img001} alt="imagem orçamento" />
        </div>
        <div className='section-c-home-textos'>   
            <h2 className='section-c-home-textos-titulo'>Solicitação de Orçamento</h2>
            <p className='section-c-home-textos-paragrafo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere numquam odio quae, impedit accusantium alias facilis quam dolorem tempora officia expedita perferendis perspiciatis unde? Autem unde quisquam eaque iusto deserunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos culpa consequuntur sed id animi facilis dolores voluptatum similique doloribus repellendus numquam, eius cum exercitationem magnam eaque alias eveniet, recusandae eum?</p>
            <button className='section-c-home-textos-botao'>Fale Conosco</button>
        </div>
    </section>
  )
}

export default SectionC