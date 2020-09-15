import styled from 'styled-components';

export const FilterArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    flex-wrap: wrap;
`

export const Title = styled.div`
    width: 90%;
    display: flex;
    margin: 0 auto;
    justify-content: center;

    border-bottom: 1px solid var(--secondary);
    margin-bottom: 20px;

    h4 {
        color: var(--secondary);
        position: relative;
        top: 10px;
        background-color: #f0f0f5;
        padding: 0 10px;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
`