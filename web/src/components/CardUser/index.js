import React from 'react';
import * as S from './styles';

function CardUser() {
    return (
        <S.Container>
            <img src="https://api.adorable.io/avatars/100/2524.png" />
            <h4>Luiz Antonio</h4>
            <button>Ver perfil</button>
        </S.Container>
    )
}

export default CardUser;