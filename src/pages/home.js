import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/home.css';
import ola from '../images/image.svg';


function Home(){

    return (
       <div className="page-landing">
           <div className="content-wrapper">
                <div className="logo">
                    <img src={Logo} alt="calculaki" />  
                </div>

                <main>
                    <h1 className="text">Bem vindo ao CalculaKi!</h1>
                    <p className="tex">Com o CalculaKi você pode fazer calculos de rotação de torno mecânico e fresadoura, de uma forma rápida e simplificada. 
                        <p>Selecione uma opção para começar a calcular.</p>
                    </p>
                   
                    {/* <div class="links">
                        <Link to="#" >Baixar PWA para utilizar como um app em dispositivos android</Link>
                        <Link to="#" >Baixar PWA para utilizar como um app em dispositivos IOS</Link>
                    </div> */}

                    
                </main>

                <div className="content-buttons">
                    <Link to="/lathe" className="button">
                        <FiArrowRight size={25} color="#ffffff" className="icon" />Torno Mecânico
                    </Link>
                    <Link to="/milling" className="button"  >
                        <FiArrowRight size={25} color="#ffffff" className="icon-2"/>Fresadora
                    </Link>

                    <p>Desenvolvido por Diego Silva-
                        <a href="https://github.com/DiegoSilvadv">Github</a>-
                        <a href="https://www.linkedin.com/in/diego-silva-96234318b/">LinkedIn</a> 
                    </p>
                </div>                    
            </div>
            

       </div>
       
       
    );
}

export default Home;