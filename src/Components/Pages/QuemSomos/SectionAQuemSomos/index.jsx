import React from 'react'
import './sectionaquemsomos.css';
import img001 from '../../../../Images/fotoQuemSomos.png';
import img002 from '../../../../Images/LOGO D.png';


const SectionAQuemSomos = () => {

  return (
    <section className="section-a-quemsomos">
        <div className="section-a-quemsomos-img">
            <img src={img001} alt="imagem palestra develocity"  className='section-a-quemsomos-img-palestra'/>
        </div>
        <div className='section-a-quemsomos-textos'>
            <h2 className='section-a-quemsomos-textos-titulo'>Quem somos</h2>
            <p className='section-a-quemsomos-textos-paragrafo quemsomos-textos-p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi unde iure eius expedita nostrum officiis repellat quos nisi praesentium rem, est assumenda eum possimus a! Praesentium animi nisi quaerat!</p>
            <p className='section-a-quemsomos-textos-paragrafo quemsomos-textos-p2'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio dignissimos, dolorum ratione ipsum voluptates laboriosam sunt quia veritatis aliquid ab rem provident, quis nisi quae? Magnam cumque voluptatem molestiae adipisci.</p>
            <p className='section-a-quemsomos-textos-paragrafo quemsomos-textos-p3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam dolore asperiores reprehenderit nihil ipsa blanditiis laboriosam eligendi! Dolores earum ullam eius delectus ad repudiandae enim molestias perferendis, quisquam repellat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, sequi. Error animi minus minima reprehenderit ipsa atque, consectetur nulla? Ab sit at reprehenderit nesciunt id tenetur quasi modi doloremque ipsum.</p>
        </div>
    </section>
  )
}

export default SectionAQuemSomos  