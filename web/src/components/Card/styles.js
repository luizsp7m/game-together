import styled from 'styled-components';

export const Card = styled.div`
    width: 300px;
    background-color: #fff;
    margin: 0 8px 16px 8px;
    box-shadow: 1px 2px 4px rgba(0,0,0,.2);

    @media (max-width: 768px) {
        width: 400px;
        margin: 0 15px 30px 15px;
    }
`

export const CardTop = styled.div`
    background-image: url('https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
    background-position: center;
    background-size: cover;
    height: 100px;
`

export const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px 20px 10px;

    img {
        position: relative;
        top: -50px;
        border: 5px solid var(--white);
        border-radius: 50%;
        width: 100px;
    }

    h4 {
        position: relative;
        top: -35px;
        color: rgba(0,0,0,.8);
        font-size: 18px;
    }

    p {
        position: relative;
        top: -20px;  
        font-family: 'Courier New', Courier, monospace;
        margin-bottom: 8px;
        text-align: center;
    }

    @media (max-width: 768px) {
        img {
            border-radius: 50%;
            width: 150px;
        }
    }
`

export const CardOptions = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;

    button {
        background: none;
        border: none;
        color: var(--primary);
        font-size: 16px;
        text-decoration: underline;
        font-weight: bold;
        outline: none;
        cursor: pointer;
    }

    span {
        color: rgba(0,0,0,.8);
    }
`