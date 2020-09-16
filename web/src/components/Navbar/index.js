import React from 'react';
import * as S from './styles'

function Home() {
    return (
        <S.Navbar>
            <S.Left>
                <h3>Game Together</h3>
            </S.Left>
            <S.Right>
                <button>Minha conta</button>
            </S.Right>
        </S.Navbar>
    );
}

export default Home;