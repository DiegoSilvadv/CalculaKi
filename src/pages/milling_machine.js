import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/milling.css';
import Logo from '../images/calculaki.svg';

import { FiArrowLeft } from 'react-icons/fi';

function Milling(){

    const [diameter, setDiameter] = useState(0);
    const [vc, setVc] = useState(0);
    const [result, setResult] = useState(0);
    
    //função de click do botão
    function handleResult(){
        if(diameter != 0 && vc != 0 ){
            setResult(Math.round((vc*1000)/(diameter*3.14)))
        }
        else {
            alert("Preencha os campos para começar a calcular fera!");
        }  
    }

    const handleClear = function (){
        setResult(0);
        setDiameter(0);
        setVc(0);
    }
    

    return(
        <div className="container">
            <div className="content">
                <Link to="/">
                    <FiArrowLeft size={23} color="#ffffff" />
                </Link>
                
                <strong>Fresadora</strong>
                <p>Para achar o rpm ideal basta apenas colocar o valor do diametro da ferramenta <small>(em mm)</small> representado pela letra 'D' e a velocidade de corte representado pelas letras 'VC'. </p>
                
                    <fieldset>
                        <legend>Fresadora</legend>
                        <div className="input-block">
                            <label htmlFor="diameter">Diametro da ferramenta(D)</label>
                            <input 
                                id="diameter" 
                                value={diameter} 
                                onChange={e => setDiameter(e.target.value)}
                                />
                        </div>
                        <div className="input-block">
                            <label htmlFor="vc">Velocidade de corte(VC)</label>
                            <input 
                                id="vc" 
                                value={vc} 
                                onChange={e => setVc(e.target.value)}
                                />
                        </div>
                        <div className="input-block">
                            <label htmlFor="result">Resultado:</label>
                            <input 
                                id="result" 
                                value={result} 
                                disabled
                                />
                        </div>

                        <button className="button-sum" onClick={handleResult} >
                            Calcular
                        </button>
                        <button onClick={handleClear}>
                            Limpar
                        </button>
                    </fieldset>
                    
                    <img src={Logo} alt="Logo"></img>
            </div>

        </div>
    );
}

export default Milling;