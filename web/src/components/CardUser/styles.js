import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--secondary);
    margin: 0 7px 14px 7px;
    padding: 10px;
    border-radius: 3px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 250px;

    img {
        height: 100px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        border: 4px solid #fff;
    }

    h4 {
        color: #fff;
        margin-top: 10px;
    }

    button {
        margin-top: 10px;
        padding: 10px 25px;
        width: 100%;
        border: none;
        background-color: var(--primary);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        font-size: 15px;
        outline: none;

        &:hover {
            opacity: .75;
        }
    }
`