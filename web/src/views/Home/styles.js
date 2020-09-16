import styled from 'styled-components';

export const FilterArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 16px 0px 8px 0px;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #ccc;
    width: 95%;
    margin: 0 auto;

    h5 {
        position: relative;
        top: 8px;
        background-color: #f0f0f5;
        padding: 0 12px;
        color: var(--dark);
    }
`

export const Content = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`