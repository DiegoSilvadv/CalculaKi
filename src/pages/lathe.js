import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/milling.css';
import Header from '../components/header';

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
            <Header />

            <div className="content">
                    <fieldset>
                        <legend>Torneamento</legend>

                        <p>Para achar o rpm ideal basta apenas colocar o valor do diâmetro da peça à usinar <small>(em mm)</small> representado pelas letras 'Dm' e a velocidade de corte representado pelas letras 'VC'. </p>

                        <div className="input-block">
                            <label htmlFor="diameter">Diametro da Peça(Dm)</label>
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
                        <div className="buttons">
                            <button className="button-sum" onClick={handleResult} >
                                Calcular
                            </button>
                            <button onClick={handleClear}>
                                Limpar
                            </button>
                        </div>
                        
                    </fieldset>
                    <div className="return">
                        <Link to="/">
                            <FiArrowLeft size={23} color="#ffffff" />
                        </Link>
                    </div>
            </div>
        </div>
    );
}

export default Milling;