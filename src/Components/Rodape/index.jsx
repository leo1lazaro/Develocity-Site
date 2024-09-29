import React from 'react'
import './rodape.css';
import imgRodapeLogo from '../../Images/rodapeLogo.jpg'
import imgRodapeFinal from '../../Images/imgRodapeFinal.png'
import imgLogoInsta from '../../Images/instaLogo.jpg'
import imgLogoLinkedin from '../../Images/linkedinLogo.jpg'

function Rodape() {
    return (
        <section className='rodape'>
            <div className='rodape-content'>
                <div className="rodape-primeira-section">
                    <img src={imgRodapeLogo} alt='Logo da empresa' style={{ width: '220px', height: '55px' }} />
                    <p>
                        Oferecemos serviços e soluções de TI para que sua empresa supere os desafios da tecnologia
                        e foque nos negócios
                    </p>
                    <p>Siga a Develocity nas redes sociais</p>
                    <div className='rodape-imagens-primeira-section'>
                        <img src={imgLogoInsta} alt="instagram" />
                        <img src={imgLogoLinkedin} alt="linkedin" />
                    </div>

                </div>
                <div className='rodape-info'>
                    <div className='rodape-mapa-do-site'>
                        <h2>Mapa do site</h2>
                        <p>Quem somos?</p>
                        <p>Serviços</p>
                        <p>Contato</p>
                    </div>
                    <div className='rodape-contato'>
                        <div>
                            <h2>Comercial</h2>
                            <p>comercial.dev@gmail.com</p>
                        </div>
                        <div>
                            <h2>Suporte Técnico</h2>
                            <p>suporte.dev@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='rodape-img-final'>
                    <img src={imgRodapeFinal} alt="img final"  style={{width: '150px'}}/>
                </div>
            </div>
            <div className='rodape-content2'>
                &copy; 2024 - DEVELOCITY - Todos os Direitos Reservados
            </div>
        </section>
    )
}

export default Rodape