import React from 'react';
import * as S from './styles';

function Filter(props) {
    return(
        <S.Container>
            <h5>{props.title}</h5>
        </S.Container>
    );
}

export default Filter;