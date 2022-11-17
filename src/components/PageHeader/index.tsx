import React from "react";
import { ActionDiv, BackButton, ButtonDiv,
    CheckButton, FavoriteButton, HeaderDiv } from "./style";

type info = {
    title?: string;
    isFavorite?: boolean;
    isDone?: boolean;
};

export default function PageHeader(
    {title, isFavorite, isDone}: info
) {
    return(
        <HeaderDiv>
            <ButtonDiv>
                <BackButton src={require('../../assets/Back.png')}/>
                <ActionDiv>
                    <FavoriteButton src={require('../../assets/Favoritar.png')}/>
                    <CheckButton src={require('../../assets/Check.png')}/>
                </ActionDiv>
            </ButtonDiv>
        </HeaderDiv>
    );
};