import React, {useState} from 'react';
import './style.css';

function AppHeader() {
    const [header,setHeader] = useState(false);
    const [active,setActive] = useState('nav');
    const [mobileIcon, setMobileIcon] = useState('mobile-menu');

    const mudaHeader = () => {

        window.scrollY >= 10
        ? setHeader(true)
        : setHeader(false);
       
    }

    const mobileMenu = () => {

        active === 'nav'
         ? setActive('nav active')
         : setActive('nav');
        
        // Mobile icon //
 
        mobileIcon === 'mobile-menu'
         ? setMobileIcon('mobile-menu active')
         : setMobileIcon('mobile-menu');
         
     }

    window.addEventListener('scroll', mudaHeader);

    return(
        <header className={header ? 'header active' : 'header'}>
            <div className='logo'>
                <h2>IMÓVEL <span className='log'>Digital</span></h2>
            </div>
            <nav className={active}>
                <a href="#sobre">Sobre</a>
                <a href="#catalogo">Catálogo</a>
                <a href="#redes">Redes</a>

                <button>WhatsApp</button>
            </nav>

            <div className={ mobileIcon } onClick={ mobileMenu }>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </header>
    );
}

export default AppHeader;