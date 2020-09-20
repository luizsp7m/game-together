import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Sign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    width: 300px;

    h1 {
        text-align: center;
        color: #4d4d4d;
        font-size: 24px;
        padding: 20px 0 20px 0;
    }

    input {
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        margin-bottom: 15px;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        padding: 15px;
        background-color: #eb4d4b;
        border: 0;
        box-sizing: border-box;
        cursor: pointer;
        font-weight: bold;
        color: #ffffff;
    }

    a {
        text-decoration: none;
        color: #4d4d4d;
        margin-top: 16px;
        cursor: pointer;

        &:hover {
            text-decoration: underline
        }
    }
`