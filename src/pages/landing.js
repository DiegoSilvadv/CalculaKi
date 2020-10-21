import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/landing.css';


function Landing(){
    return (
       <div className="page-landing">
           <div className="content-wrapper">
                <div className="logo">
                    <img src={Logo} alt="calculaki" />  
                </div>

                <main>
                    <h1>Bem vindo ao CalculaKi!</h1>
                    <p>Com o CalculaKi você pode calcular fazer calculos de rotação de torno e de fresadoura de uma forma rápida e simplificada. </p>
                </main>

                <div className="content-buttons">
                    <Link to="/lathe" className="button">
                        <FiArrowRight size={25} color="#ffffff" className="icon" />Torno Mecânico
                    </Link>
                    <Link to="/milling-machine" className="button"  >
                        <FiArrowRight size={25} color="#ffffff" className="icon-2"/>Fresadora
                    </Link>
                </div>
           </div>
       </div>
    );
}

export default Landing;