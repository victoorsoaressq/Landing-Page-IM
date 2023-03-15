import React from 'react';
import './style.css';

function AppCatalogo() {
    return (
        <section className='catalogo' id='catalogo'>
            <div className="scroll">
                <a href="#catalogo"><img src="/assets/redes/scroll.png" alt="scroll" /></a>
            </div>
            
            <div className='catalogo-titulo'>
                <p>Confira os imóveis</p>
                <p>Disponiveis no momento</p>
            </div>

            <div className='catalogo-container'>
                <div className='card-catalogo'>
                    <div className='card-img'>
                        <img
                            src="/assets/imoveis/predio_mais_alto_sao_paulo_-_porte_engenharia_widelg.jpg"
                            alt="Imóvel"
                        />
                    </div>
                    <div className='card-descritivo'>
                        <h2>Apartamento no centro de Santo André</h2>
                        <h3>R$ 160.000,00</h3>
                    </div>

                    <button>Saiba mais</button>
                </div>

                <div className='card-catalogo'>
                    <div className='card-img'>
                        <img
                            src="/assets/imoveis/predio_mais_alto_sao_paulo_-_porte_engenharia_widelg.jpg"
                            alt="Imóvel"
                        />
                    </div>
                    <div className='card-descritivo'>
                        <h2>Apartamento no centro de Santo André</h2>
                        <h3>R$ 160.000,00</h3>
                    </div>

                    <button>Saiba mais</button>
                </div>

                <div className='card-catalogo'>
                    <div className='card-img'>
                        <img
                            src="/assets/imoveis/predio_mais_alto_sao_paulo_-_porte_engenharia_widelg.jpg"
                            alt="Imóvel"
                        />
                    </div>
                    <div className='card-descritivo'>
                        <h2>Apartamento no centro de Santo André</h2>
                        <h3>R$ 160.000,00</h3>
                    </div>

                    <button>Saiba mais</button>
                </div>

                <div className='card-catalogo'>
                    <div className='card-img'>
                        <img
                            src="/assets/imoveis/predio_mais_alto_sao_paulo_-_porte_engenharia_widelg.jpg"
                            alt="Imóvel"
                        />
                    </div>
                    <div className='card-descritivo'>
                        <h2>Apartamento no centro de Santo André</h2>
                        <h3>R$ 160.000,00</h3>
                    </div>

                    <button>Saiba mais</button>
                </div>

                <div className='card-catalogo'>
                    <div className='card-img'>
                        <img
                            src="/assets/imoveis/predio_mais_alto_sao_paulo_-_porte_engenharia_widelg.jpg"
                            alt="Imóvel"
                        />
                    </div>
                    <div className='card-descritivo'>
                        <h2>Apartamento no centro de Santo André</h2>
                        <h3>R$ 160.000,00</h3>
                    </div>

                    <button>Saiba mais</button>
                </div>

                <div className='card-catalogo'>
                    <div className='card-img'>
                        <img
                            src="/assets/imoveis/predio_mais_alto_sao_paulo_-_porte_engenharia_widelg.jpg"
                            alt="Imóvel"
                        />
                    </div>
                    <div className='card-descritivo'>
                        <h2>Apartamento no centro de Santo André</h2>
                        <h3>R$ 160.000,00</h3>
                    </div>

                    <button>Saiba mais</button>
                </div>

            </div>
        </section>
    );
}

export default AppCatalogo;