import styled from 'styled-components';
import { global } from '../../globalStyles';

export const MateriaContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;

    align-items: center;
`;

export const InfoText = styled.text `
    font-family: ${global.fonts.normal};
    font-weight: normal;
    font-size: 3.9vw;
`;

export const FillDiv = styled.div `
    display: flex;
    width: 100vw;
    min-height: 24vh;
    visibility: hidden;
`;

/*-----------------------------------------------------*/

export const InfoDiv = styled.div `
    display: inline-flex;
    width: 100vw;
    margin-top: 5vh;

    justify-content: space-evenly;
`;

export const InfoBox = styled.div `
    display: flex;
    flex-direction: column;

    align-items: center;

    font-family: ${global.fonts.normal};
    font-weight: bold;
    font-size: 3.9vw;
`;

export const Info = styled.div `
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 3.7vh;
    margin-top: 1vw;

    font-family: ${global.fonts.normal};
    font-weight: normal;
    font-size: 3.9vw;

    align-items: center;
    justify-content: center;

    background: ${global.colors.azul2};
    color: white;

    border-radius: 1.8vw;
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.25);
`;

/*-----------------------------------------------------*/

export const HoraDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 5vh;

    align-items: center;

    font-family: ${global.fonts.normal};
    font-weight: bold;
    font-size: 3.9vw;
`;

export const HorasInfo = styled.div `
    display: inline-flex;
    width: 52vw;
    padding: 3.85vw 4vw;

    text-align: center;
    justify-content: space-evenly;

    color: white;
    background: ${global.colors.azul2};

    border-radius: 1.8vw;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

/*-----------------------------------------------------*/

export const RequisitoDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 5vh;

    align-items: center;

    font-family: ${global.fonts.normal};
    font-weight: bold;
    font-size: 3.9vw;
`;

export const PreRequisito = styled.div `
    display: flex;
    flex-direction: column;
    width: 86vw;
    min-height: 10.6vh;

    align-items: center;
    justify-content: center;

    font-family: ${global.fonts.normal};
    font-weight: normal;

    color: white;
    background: ${global.colors.azul2};
    border-radius: 3.9vw;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

/*-----------------------------------------------------*/

export const EmentaDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 86vw;
    margin-top: 5vh;
    padding-top: 2vh;

    align-items: center;
    justify-content: center;

    font-family: ${global.fonts.normal};
    font-size: 7vw;
    font-weight: bold;

    background: ${global.colors.cinza1};
    border-radius: 7px;
`;

export const Ementa = styled.ul `
    display: flex;
    flex-direction: column;
    width: 65vw;

    margin-top: 1vh;
`;