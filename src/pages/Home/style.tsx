import styled from 'styled-components';
import { global } from '../../globalStyles';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    align-items: center;
`;

export const Board = styled.img `
    display: flex;
    width: 87.2vw;
    height: 22.63vh;
    min-width: 340px;
    min-height: 192px;
    padding-top: 11vh;

    border-radius: 4.5vw;
`;

export const HomeFooter = styled.footer `
    display: flex;
    width: 100vw;
    height: 4vh;
    min-height: 33px;

    position: fixed;
    bottom: 0;

    background-color: black;
    color: white;
    align-items: center;
    justify-content: center;

    border-radius: 7px 7px 0px 0px;
`;

export const SearchBar = styled.div `
    display: flex;
    flex-shrink: 0;
    height: 6vh;
    width: 75.89vw;
    min-width: 296px;
    min-height: 50px;

    margin: 15% 0;

    align-items: center;
    justify-content: space-evenly;

    font-family: 'Poppins';

    border-radius: 37px;
    background-color: ${global.colors.cinza1};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const SearchIcon = styled.img `
    display: flex;
    width: 5.4vw;
    height: 2.4vh;
    min-width: 21px;
    min-height: 21px;
`;

export const SearchInput = styled.input `
    display: flex;
    width: 75%;
    height: 55%;
    margin-right: 3%;

    font-size: 4.5vw;
    color: ${global.colors.azul1};

    border: none;
    outline: none;

    ::placeholder {
        padding-left: 5px; 
        color: #a0a0a0;
    }
`;