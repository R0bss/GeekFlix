import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/GeekFlix_Logo.png';
import './menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="GeekFlix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;