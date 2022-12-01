import styled from "styled-components";
import { global } from "../../globalStyles";

export const PeriodoDiv = styled.div `
    display: inline-flex;
    width: 70vw;
    margin-top: 1.3vh;
    justify-content: space-evenly;
`;

export const NumSquare = styled.button `
    display: flex;
    width: 5.5vw;
    height: 6vw;

    justify-content: center;
    align-items: center;

    font-family: ${global.fonts.normal};
    font-size: 4vw;
    font-weight: bold;

    border-radius: 0.5vw;
    border: 2px solid ${global.colors.azulclaro};

    color: ${global.colors.azulclaro};
    background: ${global.colors.azul1};

    transition: transform 1s ease;
    :focus {
        transform: scale(1.3, 1.3);
        color: ${global.colors.azul1};
        background: ${global.colors.azulclaro};
    }
`