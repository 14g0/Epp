import styled from "styled-components";

export const ButtonArea = styled.button `
    display: flex;
    width: min-content;

    align-items: center;
    justify-content: center;

    font-family: 'Poppins';

    border: none;
    border-radius: 8vw;

    transition: transform 0.5s ease;

    :active {
        transform:  translateY(10px);
    }
`;

export const ImgButton = styled.img `
    display: flex;
        
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`