import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color: var(--white);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 2px 4px rgba(0,0,0,.2);

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`

export const Left = styled.div`
    padding-left: 100px;
    color: var(--dark);
`

export const Right = styled.div`
    padding-right: 100px;
    
    button {
        border: none;
        padding: 13px 25px;
        background-color: var(--danger);
        color: var(--white);
        font-weight: bold;
        cursor: pointer;
        outline: none;

        @media (max-width: 768px) {
            background-color: var(--danger);
            color: var(--white);
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 0;
            border: 0;
            text-align: center;
            width: 100%;
        } 
    }

    .logout {
        background-color: var(--light);
        color: var(--danger);
        margin-left: 15px;

        @media (max-width: 768px) {
            display: none;
        } 
    }
`