import styled from "styled-components";
import {global} from '../../globalStyles';

export const InputView = styled.form `
    display: flex;
    width: 70vw;

    flex-direction: column;

    background-color: ${global.colors.azul1};

    padding: 3% 0 5% 2%;
    margin: 3% 0;

    border-radius: 15px;

    align-items: center;
    justify-content: flex-start;

    box-shadow: 0 5px 10px -4px #000000;
`;

export const DataRequest = styled.text `
    display: flex;
    align-self: flex-start;
    color: white;
    font-size: 150%;
    font-family: ${global.fonts.normal};
    margin-bottom: 2%;
    margin-left: 3%;
`;

export const Databox = styled.input`
    width: 85%;
    height: 45px;

    align-self: flex-start;

    color: ${global.colors.azul1};
    background-color: white;
    font-size: 110%;

    margin-left: 3%;
    padding: 0 2% 0 3%;

    border: 1px solid transparent;
    border-radius: 7px;
    outline: none;
    &: focus {
        border-color: red;
    }
`;