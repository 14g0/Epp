import { useState } from 'react';
import PageHeader from "../../components/PageHeader";
import { FillDiv, PeriodosContainer } from "./style";
import { HomeContainer } from "../Home/style";
import OptionBox from "../../components/Optionbox";
import { global } from "../../globalStyles";
import { useNavigate, Link } from 'react-router-dom';


export default function Periodos() {

    const periodos = ['Primeiro', 'Segundo', 'Terceiro',
    'Quarto', 'Quinto', 'Sexto', 'Sétimo'];

    const [periodo, tggPeriodo] = useState('1');
    let atualPeriodo = parseInt(periodo);

    const plusPeriodo = () => {
        if(atualPeriodo===7){
            tggPeriodo('1');
        }
        else {
            tggPeriodo(`${atualPeriodo+1}`);
        }
    }

    const minusPeriodo = () => {
        if(atualPeriodo===1){
            tggPeriodo('7');
        }
        else {
            tggPeriodo(`${atualPeriodo-1}`);
        }
    }

    const nav = useNavigate();

    return(
        <PeriodosContainer>
            <FillDiv/>
            <PageHeader
            title= {`${periodos[parseInt(periodo)-1]} Período`}
            setP={tggPeriodo}
            increaseP={plusPeriodo}
            decreaseP={minusPeriodo}
            navType={'1'}
            switchDisp
            minheight='27vh'
            goback={() => nav(-1)}/>

            <HomeContainer style={{
                display: periodo==='1'?'flex':'none'
            }}>
                <Link to='/Epp/periodos/ICP131'>
                    <OptionBox
                    cor={`${global.colors.azul1}`}
                    title='Programação de computadores I'/>
                </Link>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Projeto de Carreira'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Fundamentos da Comp. DIgital'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Números Inteiros e Criptografia'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Introdução ao Pens. Dedutivo'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Processos de Software'/>
            </HomeContainer>

            <HomeContainer style={{
                display: periodo==='2'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Programação de computadores 2'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Projeto Prático'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Habilidades Sociais para o Trabalho'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Organização de Dados'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Cálculo Infinitesimal I'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Matemática Discreta'/>
            </HomeContainer>

            <HomeContainer style={{
                display: periodo==='3'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Cálculo Diferencial e Integral II'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Álgebra Linear Algorítmica'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Programação Orientada a Objeto'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Estrutura de Dados'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Intro. Modelagem de Sistemas'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Intro. Computação Numérica'/>
            </HomeContainer>

            <HomeContainer style={{
                display: periodo==='4'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Arq. Computadores e SO'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Estatística e Probabilidade'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Banco de Dados I'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Comp. Científ. e Análise de Dados'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Tecnologia e Sociedade'/>
            </HomeContainer>

            <HomeContainer style={{
                display: periodo==='5'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Model. Mat. e Computação'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Algoritmos e Grafos'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Linguagens Formais'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Computadores e Programação'/>
            </HomeContainer>

            <HomeContainer style={{
                display: periodo==='6'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Computação Gráfica'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Programação Concorrente'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Otimização'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Intro. Aprendizado de Máquina'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Redes de Computadores I'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Lógica e Computabilidade'/>
            </HomeContainer>

            <HomeContainer style={{
                display: periodo==='7'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Metodologia da Pesquisa'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Segurança da Informação'/>
            </HomeContainer>
        </PeriodosContainer>
    );
}