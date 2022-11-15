import React from "react";
import { OptionText, OptionView } from "./style";

type info = {
    title: string;
    cor: string;
    textcolor?: string;
};

export default function OptionBox(
    {title, cor, textcolor}: info
) {
    return(
        <OptionView style={{
            backgroundColor: cor
        }}>
            <OptionText style={{
                color: textcolor
            }}>{title}</OptionText>
        </OptionView>
    );
};