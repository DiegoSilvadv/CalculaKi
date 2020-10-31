import React from 'react';
import Logo from '../images/logo.svg';
import '../styles/StylesComponents/header.css';

function Header(){
    return (
        <div className="logo">
                    <img src={Logo} alt="Logo"></img>
        </div>
    );
}

export default Header;