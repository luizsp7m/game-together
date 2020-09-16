import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color: #fff;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

export const Left = styled.div`
    padding-left: 100px;
`

export const Right = styled.div`
    padding-right: 100px;
    
    button {
        border: none;
        padding: 13px 25px;
        background-color: var(--primary);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        outline: none;

        @media (max-width: 768px) {
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
`