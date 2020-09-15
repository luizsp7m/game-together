import React from 'react';
import * as S from './styles'

function Home() {
    return (
        <S.Container>
            <S.Left>
                <h4>Game Together</h4>
            </S.Left>
            <S.Right>
                <a href="#">Minha conta</a>
                <a href="#">
                    <i class="fas fa-bell"></i>
                    <span id="notifications">5</span>
                </a>
            </S.Right>
        </S.Container>
    );
}

export default Home;