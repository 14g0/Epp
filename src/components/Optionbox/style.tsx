import styled from "styled-components";

export const OptionView = styled.button `
    display: flex;
    flex-shrink: 0;
    height: 6vh;
    width: 75.89vw;
    min-width: 296px;
    min-height: 50px;

    margin: 4% 0;

    align-items: center;
    justify-content: center;

    font-family: 'Poppins';

    border: none;
    border-radius: 37px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    transition: transform 0.5s ease;

    :active {
        transform:  translateY(10px);
    }
`;

export const OptionText = styled.text `
    display: flex;
    color: white;
    font-size: 4.5vw;
`;