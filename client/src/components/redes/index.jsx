import React from 'react';
import './style.css';

function AppRedes() {
    return (
        <section className='redes' id='redes'>
            <div className="rede-descritivo">
                <p>acesse</p>
                <p>Minhas principais</p>
                <p>redes sociais</p>
            </div>



            <div className="rede-box">
                <div className="rede-social">

                    <img src="/assets/redes/facebook.png" alt="facebook" />

                    <img src="/assets/redes/instagram.png" alt="instagram" />

                    <img src="/assets/redes/linkedin.png" alt="linkedin" />

                </div>
            </div>




        </section>
    );
}

export default AppRedes;