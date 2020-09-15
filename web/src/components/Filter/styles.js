import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--secondary);
    padding: 10px 25px;
    width: 100px;
    height: 32px;
    margin: 0 10px 20px 10px;
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