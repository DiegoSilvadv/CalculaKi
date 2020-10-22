import React, { useState } from 'react';
import '../styles/lathe.css';

function Lathe(){




    const [diameter, setDiameter] = useState(0);
    const [vc, setVc] = useState(0);
    const [result, setResult] = useState('');
  
    
    const handleResult = () => setResult(Math.round((vc*1000)/(diameter*3.14)));

    

    return(
        <div className="container">
            <div className="content">
                <strong>Torno mecânico</strong>
                <p>Para achar o rpm ideal basta apenas colocar o valor do diametro da peça <small>(em mm)</small> representado pela letra 'D' e a velocidade de corte representado pelas letras 'VC'. </p>
                
                    <fieldset>
                        <legend>Torno mecânico</legend>
                        <div className="input-block">
                            <label htmlFor="diameter">Diametro da peça(D)</label>
                            <input 
                                id="diameter" 
                                value={diameter} 
                                onChange={e => setDiameter(e.target.value)}
                                />
                        </div>
                        <div className="input-block">
                            <label htmlFor="vc">Velocidade de corte</label>
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
                                />
                        </div>

                        <button className="button-sum" onClick={handleResult} >
                            Calcular
                        </button>
                    </fieldset>

                   
            
            </div>
        </div>
    );
}

export default Lathe;