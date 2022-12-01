import IconButton from "../IconButton";
import NavPeriodo from "../NavPeriodo";
import { ActionDiv, ButtonDiv, HeaderDiv, HeaderTitle, TitleDiv } from "./style";


type info = {
    title?: string;
    actiondiv?: boolean;
    switchDisp?: boolean;
    backButton?: boolean;
    minheight?: string;
    
    navType?: any;
    setP?: any;
    increaseP?: any;
    decreaseP?: any;
    goback?: any;
};

export default function PageHeader(
    {title, actiondiv, setP, switchDisp, goback,
    increaseP, decreaseP, navType, minheight}: info
) {
    return(
        <HeaderDiv style={{minHeight: `${minheight}`}}>
            <ButtonDiv>
                <IconButton
                imgpath="Back.png"
                bttw="9.7vw"
                bdradius="8vw"
                bshadow="none"
                turnOn
                back={goback}/>

                <ActionDiv>
                    <IconButton
                    imgpath="Check.svg"
                    bttw="9vw"
                    bdradius="8vw"
                    bshadow="none"
                    turnOn={actiondiv}/>

                    <IconButton
                    imgpath="Favoritar.png"
                    bttw="8.5vw"
                    bshadow="none"
                    turnOn={actiondiv}/>
                </ActionDiv>
            </ButtonDiv>

            <TitleDiv>
                <IconButton
                imgpath="SwitchLeft.svg"
                btth="3.4vh"
                bshadow="none"
                changePeriodo={decreaseP}
                turnOn={switchDisp}/>
                
                <HeaderTitle>{title}</HeaderTitle>

                <IconButton
                imgpath="SwitchRight.svg"
                btth="3.4vh"
                bshadow="none"
                changePeriodo={increaseP}
                turnOn={switchDisp}/>
            </TitleDiv>

            <NavPeriodo
            setPeriodo={setP}
            switchDisp={navType}/>
        </HeaderDiv>
    );
};