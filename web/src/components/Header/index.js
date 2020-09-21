import React from 'react';
import * as S from './styles';
/* import { Container, Navbar, Nav } from 'react-bootstrap'; */
import { Link } from 'react-router-dom';

function Header() {
    return (
        <S.Navbar>
            <S.Left>
                <h4>Game Together</h4>
            </S.Left>
            <S.Right>
                <button>Detalhes da minha conta</button>
                <button className="logout">
                    <i className="fas fa-power-off"></i>
                </button>
            </S.Right>
        </S.Navbar>
    );
}

export default Header;