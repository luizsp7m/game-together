import React, { useState } from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

function User() {

    const [jogo, setJogo] = useState();
    const [jogos, setJogos] = useState([{'value': 'GTA V'}, {'value': 'Free Fire'}]);

    function adicionarJogo() {
        setJogos([...jogos, {
            value: jogo
        }]);
    }

    const [idioma, setIdioma] = useState();
    const [idiomas, setIdiomas] = useState([{'value': 'Português'}, {'value': 'Inglês'}]);

    function adicionarIdioma() {
        setIdiomas([...idiomas, {
            value: idioma
        }]);
    }

    return (
        <>
            <S.Content>
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                    Voltar para a Home
                </Link>
                <S.Profile>
                    <S.Background>
                        <img src="https://api.adorable.io/avatars/285/65.png" />
                    </S.Background>
                    <S.Inputs>
                        <span>Nome: </span>
                        <input type="text" placeholder="Nome do usuário" />
                        <span>Sobre mim: </span>
                        <textarea rows="5" placeholder="Descrição do usuário" />
                        <span>Discord: </span>
                        <input type="text" placeholder="Discord do usuário" />
                        <span>Jogos: </span>
                        <S.CustomImput>
                            <input type="text" placeholder="Nome do jogo que você joga" onChange={e => setJogo(e.target.value) } />
                            <button onClick={adicionarJogo}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </S.CustomImput>
                        <S.List>
                            {
                                jogos.map((jogo, index) => (
                                    <span key={index}>
                                        {jogo.value}
                                        <i className="fas fa-times"></i>
                                    </span>  
                                ))
                            }
                        </S.List>
                        <span>Idiomas: </span>
                        <S.CustomImput>
                            <input type="text" placeholder="Idiomas que você fala" onChange={e => setIdioma(e.target.value) } />
                            <button onClick={adicionarIdioma}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </S.CustomImput>
                        <S.List>
                            {
                                idiomas.map((idioma, index) => (
                                    <span key={index}>
                                        {idioma.value}
                                        <i className="fas fa-times"></i>
                                    </span>  
                                ))
                            }
                        </S.List>
                        <button>Salvar alterações</button>
                    </S.Inputs>
                </S.Profile>
            </S.Content>
        </>
    );
}

export default User;