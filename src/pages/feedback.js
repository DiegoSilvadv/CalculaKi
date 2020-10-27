import React from 'react';
import '../styles/feedback.css';


function Feedback(){
    return (
        <div className="page">
           <div className="content">
               <textarea className="feedback" placeholder="Deixe uma sugestão aqui..."></textarea>
               <button>Enviar</button>
           </div>
       </div>
    );
}

export default Feedback;