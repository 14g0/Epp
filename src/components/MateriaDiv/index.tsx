import { useNavigate } from 'react-router-dom';
import PageHeader from "../PageHeader";
import { MateriaContainer, InfoDiv, Info,
    InfoBox, HoraDiv, HorasInfo, RequisitoDiv,
    PreRequisito, InfoText, EmentaDiv,FillDiv,
    Ementa} from "./style";

type info = {
    titulo?: string;
    codigo?: string;
    periodo?: string;
    credito?: string;

    horaPrat?: string;
    horaTeo?: string;

    preReq?: any;
    habilita?: any;

    ementa?: any;
};


export default function Materia(
    {codigo, periodo, credito, titulo, ementa,
    horaPrat, horaTeo, preReq, habilita}: info
) {
    const nav = useNavigate();
    return (
        <MateriaContainer>
            <FillDiv/>
            <PageHeader
            actiondiv
            title={titulo}
            goback={() => nav(-1)}/>

            <InfoDiv>
                <InfoBox>
                    Código
                    <Info>
                        {codigo}
                    </Info>
                </InfoBox>

                <InfoBox>
                    Período
                    <Info>
                        {periodo}º
                    </Info>
                </InfoBox>

                <InfoBox>
                    Crédito
                    <Info>
                        {credito}
                    </Info>
                </InfoBox>
            </InfoDiv>

            <HoraDiv>
                Horas
                <HorasInfo>
                    <InfoBox>
                        <InfoText>
                            Prática:<br/>{horaPrat}h
                        </InfoText>
                    </InfoBox>

                    <InfoBox>
                        <InfoText>
                            Teórica:<br/>{horaTeo}h
                        </InfoText>
                    </InfoBox>
                </HorasInfo>
            </HoraDiv>

            <RequisitoDiv>
                Pré-Requisitos
                <PreRequisito>
                    {preReq}
                </PreRequisito>
            </RequisitoDiv>

            <RequisitoDiv>
                Habilita
                <PreRequisito>
                    {habilita}
                </PreRequisito>
            </RequisitoDiv>

            <EmentaDiv>
                Ementa
                <Ementa>
                    {ementa}
                </Ementa>
            </EmentaDiv>

            <div style={{
                display: 'block',
                minHeight: '5vh',
                background: 'red',
                visibility: 'hidden'
            }}>a</div>
        </MateriaContainer>
    );
};