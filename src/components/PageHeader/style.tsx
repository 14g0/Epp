import styled from "styled-components";
import { global } from "../../globalStyles";

export const HeaderDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 24vh;
    margin-bottom: 6vh;
    position: fixed;

    align-items: center;
    
    border-radius: 0 0 20px 20px;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.45);

    background-color: ${global.colors.azul1};
`;

export const ButtonDiv = styled.div `
    display: inline-flex;
    width: 90%;
    margin-top: 5vh;

    justify-content: space-between;
`;

export const ActionDiv = styled.div `
    display: flex;
    width: 25%;
    justify-content: space-between;
`;

export const TitleDiv = styled.div `
    display: inline-flex;
    width: 100%;
    height: 50px;
    margin-top: 4vh;

    align-items: center;
    justify-content: space-evenly;
`

/*------------------------------------------------------------*/

export const HeaderTitle = styled.text `
    display: flex;
    width: 75.9vw;

    font-family: ${global.fonts.normal};
    font-size: 7vw;

    text-align: center;
    justify-content: center;
    line-height: 9vw;

    color: white;
`; 