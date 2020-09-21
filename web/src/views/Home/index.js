import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';

import api from '../../services/api';

function Home() {

    const [users, setUsers] = useState([]);
    const [count, setCount] = useState();

    async function loadUsers() {
        await api.get('/user/filter/all').then((response) => {
            setUsers(response.data);
            setCount(response.data.length);
        })
    }

    useEffect(() => {
        loadUsers();
    });

    return (
        <>
            <Header />
            <S.Content>
                <S.Title>
                    <span>Escolha seu jogo e idioma e veja todos os jogadores cadastrados na plataforma</span>
                </S.Title>

                <S.InputArea>
                    <input type="text" placeholder="Nome do jogo" />
                    <input type="text" placeholder="Idioma" />
                </S.InputArea>

                <S.Title>
                    <h4>Jogadores encontrados ({count})</h4>
                </S.Title>

                
            </S.Content>

            <S.CardArea>
                {
                    users.map((user, index) => (
                        <Card key={index} id={user._id} avatar={user.avatar} name={user.name} description={user.description} created={user.created} />
                    ))
                }
            </S.CardArea>
        </>
    );
}

export default Home;