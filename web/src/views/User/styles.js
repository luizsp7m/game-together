import styled from 'styled-components';

export const Content = styled.div`
    max-width: 992px;
    margin: 16px auto;

    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;
        color: rgba(0,0,0,.8);

        &:hover {
            opacity: .9;
        }

        i {
            margin-right: 10px;
        }

        @media (max-width: 768px) {
            padding-left: 10px;
        }
    }
`

export const Profile = styled.div`
    margin-top: 16px;
`

export const Background = styled.div`
    background-image: url('https://images.unsplash.com/photo-1581397867212-e05b3692d16b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
    background-position: center;
    background-size: cover;
    height: 25vh;
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    img {
        height: 100px;
        border-radius: 50%;
        border: 5px solid #fff;
        position: relative;
        top: 50px;
    }
`

export const Inputs = styled.div`
    max-width: 550px;
    margin: 64px auto;
    display: flex;
    flex-direction: column;

    span {
        font-weight: bold;
        color: rgba(0,0,0,.8);
        margin-bottom: 8px;
        margin-left: 2px;
    }

    input, textarea {
        margin-bottom: 20px;
        padding: 10px 15px;
        border-radius: 3px;
        border: 1px solid rgba(0,0,0,.1);
        resize: none;
        outline: none;
    }

    button {
        height: 44px;
        border: none;
        background-color: var(--success);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        outline: none;

        &:hover {
            opacity: .8;
        }
    }

    @media (max-width: 768px) {
        padding: 10px;
    }
`

export const CustomImput = styled.div`
    position: relative;
    width: 100%;

    display: flex;
    justify-content: space-between;
    

    input {
        width: 100%;

        margin-bottom: 10px;
        padding: 10px 15px;
        border-radius: 3px 0 0 3px;
        border: 1px solid rgba(0,0,0,.1);
        resize: none;
        outline: none;
    }

    button {
        width: 40px;
        height: 37px;
        color: #fff;
        cursor: pointer;
        border: none;
        outline: none;
        background: var(--success);
        border-radius: 0 3px 3px 0;
    }
`

export const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 10px;

    span {
        font-size: 12px;
        background-color: #D8DADF;
        color: rgba(0,0,0,.8);
        padding: 5px 7px;
        border-radius: 10px;
        margin: 0 5px 10px 5px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover {
            opacity: .8;
        }

        i {
            margin-left: 10px;
        }
    }
`