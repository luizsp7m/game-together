import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--secondary);
    width: 100%;
    height: 60px;
    border-bottom: 4px solid var(--primary);
    display: flex;
    justify-content: space-between;
`
export const Left = styled.div`
    margin-left: 76px;
    display: flex;
    align-items: center;
    
    h4 {
        color: #f0f0f5;
    }
`

export const Right = styled.div`
    margin-right: 76px;
    display: flex;
    align-items: center;
    
    a {
        color: #f0f0f5;
        font-size: .95rem;
        text-decoration: none;
        margin-left: 35px;

        &:hover {
            opacity: .85;
        }
    }

    .fa-bell {
        font-size: 1.5rem;
    }

    #notifications {
        background-color: var(--danger);
        font-weight: bold;
        height: 20px;
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        top: 13px;
        right: 70px;
    }
`