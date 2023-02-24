import React from 'react';
import './style.css';

function AppFooter() {
    return (
        <div className="footer-background">
            <div className='app-footer'>
                <div className="footer-left">
                    <h2>Ficou com <br/>Alguma duvida?</h2>
                    
                    <p>Para mais informações<br/>acesse meu WhatsApp<br/>estarei esperando por você!</p>
                    
                    <button>WhatsApp</button>
                </div>
                <div className="footer-right">
                    <img src="/assets/redes/mao-whatsapp.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default AppFooter;