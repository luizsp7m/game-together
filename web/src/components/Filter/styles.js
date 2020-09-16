import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--dark);
    padding: 10px 25px;
    width: 100px;
    height: 32px;
    margin: 0 5px 10px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 1px;
    cursor: pointer;

    &:hover {
        opacity: .85;
    }
`