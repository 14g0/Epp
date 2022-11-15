import React from 'react'
import { Databox, DataRequest, InputView } from "./style";

type info = {
    datatype: string;
    holdertxt: string;
    type: string;
};

export default function InputBox(
    {datatype, holdertxt, type}: info
    ) {
    return (
        <InputView>
            <DataRequest>{datatype}</DataRequest>
            <Databox placeholder={holdertxt} type={type}/>
        </InputView>
    );
};