import styled from "styled-components";
import { global } from "../../globalStyles";

export const HeaderDiv = styled.div `
    display: flex;
    width: 100vw;
    height: 26.2vh;
    
    background-color: ${global.colors.azul1};

    border-radius: 0 0 20px 20px;
`;

export const ButtonDiv = styled.div `
    display: inline-flex;
    width: 100%;
    height: 10%;

    background: red;

    align-items: center;
    justify-content: space-between;
`;

export const ActionDiv = styled.div `
    display: flex;
    height: 100%;

    background: aqua;
`;

/*------------------------------------------------------------*/

export const BackButton = styled.img `
    display: flex;
    width: 20px;
    height: 20px;
`;

export const FavoriteButton = styled.img `
    display: flex;
    width: 20px;
    height: 20px;
`;

export const CheckButton = styled.img `
    display: flex;
    width: 20px;
    height: 20px;
`;

/*----------------------------------------*/

export const HeadName = styled.text `
    display: flex;
    width: 100%;
    height: 100%;
`;