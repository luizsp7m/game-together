import React from 'react';
import Navbar from '../../components/Navbar';
import * as S from './styles'
import Filter from '../../components/Filter';
import CardUser from '../../components/CardUser';

function Home() {
    return (
        <div>
            <Navbar />
            <S.FilterArea>
                <Filter title="Todos" />
                <Filter title="Ação" />
                <Filter title="Luta" />
                <Filter title="Futebol" />
                <Filter title="Corrida" />
                <Filter title="FPS" />
            </S.FilterArea>

            <S.Title>
                <h5>
                    Jogadores encontrados
                </h5>
            </S.Title>

            <S.Content>
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
            </S.Content>
        </div>
    );
}

export default Home;