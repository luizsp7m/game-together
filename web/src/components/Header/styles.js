import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color: var(--white);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 2px 1px 2px rgba(0,0,0,.2);

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`

export const Left = styled.div`
    padding-left: 100px;

    h4 {
        color: var(--dark);
        cursor: pointer;
    }
`

export const Right = styled.div`
    padding-right: 100px;
    
    button {
        border: none;
        padding: 13px 25px;
        background-color: var(--primary);
        color: var(--white);
        font-weight: bold;
        cursor: pointer;
        outline: none;

        &:hover {
            opacity: .8;
        }

        @media (max-width: 768px) {
            background-color: var(--primary);
            color: var(--white);
            position: fixed;
            z-index: 10;
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
        border: 1px solid rgba(0,0,0, .1);
        color: var(--danger);
        margin-left: 15px;
        padding: 12px 13px;
        background-color: var(--white);

        @media (max-width: 768px) {
            display: none;
        } 
    }
`