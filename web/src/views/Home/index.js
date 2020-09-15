import React from 'react';
import Header from '../../components/Header';
import * as S from './styles'
import Filter from '../../components/Filter';
import CardUser from '../../components/CardUser';

function Home() {
    return (
        <>
            <Header />
            <S.FilterArea>
                <Filter title="Todos" />
                <Filter title="Ação" />
                <Filter title="Aventura" />
                <Filter title="RPG" />
                <Filter title="Esporte" />
                <Filter title="Corrida" />
                <Filter title="Simulação" />
            </S.FilterArea>

            <S.Content>
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
                <CardUser />
            </S.Content>
        </>
    );
}

export default Home;