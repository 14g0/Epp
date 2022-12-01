import { NumSquare, PeriodoDiv } from './style';

type show = {
    setPeriodo: any;
    switchDisp?: string;
}

export default function NavPeriodo(
    {setPeriodo, switchDisp}: show
) {
    return(
        <PeriodoDiv>
            <PeriodoDiv style={{
                display: switchDisp==='1'? 'flex':'none'
            }}>
                <NumSquare
            onFocus={(p) => setPeriodo(p.target.value)}
            value='1'>1</NumSquare>

            <NumSquare
            onFocus={(p) => setPeriodo(p.target.value)}
            value='2'>2</NumSquare>
            
            <NumSquare
            onFocus={(p) => setPeriodo(p.target.value)}
            value='3'>3</NumSquare>
            
            <NumSquare
            onFocus={(p) => setPeriodo(p.target.value)}
            value='4'>4</NumSquare>
            
            <NumSquare
            onFocus={(p) => setPeriodo(p.target.value)}
            value='5'>5</NumSquare>
            
            <NumSquare
            onFocus={(p) => setPeriodo(p.target.value)}
            value='6'>6</NumSquare>
            
            <NumSquare
            onFocus={(p) => setPeriodo(p.target.value)}
            value='7'>7</NumSquare>
            </PeriodoDiv>

            <PeriodoDiv style={{
                display: switchDisp==='2'? 'flex':'none'
            }}>
                <NumSquare
                onFocus={(p) => setPeriodo(p.target.value)}
                value='1'>1</NumSquare>

                <NumSquare
                onFocus={(p) => setPeriodo(p.target.value)}
                value='2'>2</NumSquare>
                
                <NumSquare
                onFocus={(p) => setPeriodo(p.target.value)}
                value='3'>3</NumSquare>
                
                <NumSquare
                onFocus={(p) => setPeriodo(p.target.value)}
                value='4'>4</NumSquare>
                
                <NumSquare
                onFocus={(p) => setPeriodo(p.target.value)}
                value='5'>5</NumSquare>
            </PeriodoDiv>
        </PeriodoDiv>
    );
}