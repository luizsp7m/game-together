import React, { useMemo } from 'react';
import * as S from './styles';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

function Card(props) {
    const date = useMemo(() => format(new Date(props.created), 'dd/MM/yyyy'));

    return (
        <S.Card>
            <S.CardTop></S.CardTop>
            <S.CardBottom>
                <img src={props.avatar} />
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <S.CardOptions>
                    <Link to={`/user/filter/${props.id}`}>
                        <button>Ver perfil</button>
                    </Link>
                    <span>{date}</span>
                </S.CardOptions>
            </S.CardBottom>
        </S.Card>
    );
}

export default Card;