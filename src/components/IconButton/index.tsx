import { ButtonArea, ImgButton } from "./style";

type ButtonInfo = {
    imgpath: string;
    bttw?: string;
    btth?: string;
    bdradius?: string;
    bshadow?: string;
    changePeriodo?: any;
    turnOn?: boolean;
    back?: any;
};

export default function IconButton(
    {imgpath, bttw, btth, bdradius, back,
    bshadow, changePeriodo, turnOn}:ButtonInfo
) {
    return(
        <ButtonArea onClick={(p) => changePeriodo(p.target.addEventListener('', ButtonArea))} value='1'
        onFocus={(e) => back(e.target.value)}
        style={{visibility: turnOn? 'visible': 'hidden'}}>
            <ImgButton src={require('../../assets/'+imgpath)}
            style={{
                width: bttw,
                height: btth,
                borderRadius: bdradius,
                boxShadow: bshadow,
            }}/>
        </ButtonArea>
    );
};