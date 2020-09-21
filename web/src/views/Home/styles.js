import styled from 'styled-components';

export const Content = styled.div`
    padding-left: 100px;
    padding-right: 100px;

    @media (max-width: 768px) {
        padding: 0;
    }
`

export const Title = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;
    color: rgba(0,0,0,.8);
    font-size: 18px;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const InputArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        height: 24px;
        border: none;
        border-radius: 5px;
        width: 45%;
        padding: 10px 25px;
        border: 1px solid rgba(0,0,0,.1);
        outline: none;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;

        input {
            margin-bottom: 8px;
            width: 80%;
        }
    }
`

export const CardArea = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    @media (max-width: 768px) {
        justify-content: center;
    } 
`