import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #0a3d62;
    width: 175px;
    margin: 0 5px 10px 5px;
    border-radius: 2px;

    img {
        border-radius: 50%;
        height: 100px;
        margin-bottom: 15px;
    }

    h4 {
        margin-bottom: 10px;
        color: #fff;
        font-size: .9rem;
    }

    button {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        width: 100%;
        height: 36px;
        padding: 10px;
        border: none;
        background-color: var(--danger);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        outline: none;

        &:hover {
            opacity: .85;
        }
    }
`