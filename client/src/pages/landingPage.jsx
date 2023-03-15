import './landingPage.css';

import CountUp from 'react-countup';

import AppHeader from '../components/header/index';
import AppCatalogo from '../components/catalogo/index';
import AppRedes from '../components/redes/index';
import BotaoWhatsapp from '../components/botaoWhatsapp/index';
import AppFooter from '../components/footer/index';


function LandingPage() {

    return (
        <div>
            <AppHeader />
            <main>

                <BotaoWhatsapp />

                <section className='sobre' id='sobre'>
                    <div className='container-descritivo'>
                        <p>Corretor de imóvies especializado</p>
                        <h1>Kiko Almeida da Silva</h1>
                        <h3>Atuando com venda e locação de imóveis dos mais diversificados níveis</h3>
                    </div>
                    <div className='container-img'>
                        <div className='img'>
                            <img
                                src="/assets/corretor/corretor-de-imovel-creci.jpg"
                                alt="Corretor"
                            />
                        </div>
                    </div>
                </section>

                <section className='cards'>
                    <div className='card'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" /></svg>
                        <h2>
                            IMÓVEIS<br/>
                            VENDIDOS
                        </h2>
                        
                        <h3>
                            <CountUp
                                start={0}
                                end={23}
                                duration={1.5}
                            ></CountUp>
                        </h3>
                    </div>
                    <div className='card'>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24" /></g><g><path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z" /></g></svg>
                        <h2>
                            IMÒVEIS<br/>
                            ALUGADOS
                        </h2>
                        <h3>
                            <CountUp
                                start={0}
                                end={18}
                                duration={1.5}
                            ></CountUp>
                        </h3>
                    </div>
                    <div className='card'>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24" /></g><g><path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" /></g></svg>
                        <h2>
                            PLANTÕES<br/>
                            TRABALHADOS
                        </h2>
                        <h3>
                            <CountUp
                                start={0}
                                end={3}
                                duration={0.5}
                            ></CountUp>
                        </h3>
                    </div>
                    <div className='card'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18V3zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
                        <h2>
                            CONTRATOS<br/>
                            CONCLUIDOS
                        </h2>
                        <h3>
                            <CountUp
                                start={0}
                                end={41}
                                duration={1.5}
                            ></CountUp>
                        </h3>
                    </div>
                </section>

                <AppCatalogo />
                <AppRedes />
                
            </main>
            <AppFooter />
        </div>
    );
}

export default LandingPage;