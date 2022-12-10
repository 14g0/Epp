import { useState } from 'react';
import PageHeader from "../../components/PageHeader";
import { FillDiv, PerfilContainer } from './style';
import { HomeContainer } from "../Home/style";
import OptionBox from "../../components/Optionbox";
import { global } from "../../globalStyles";
import { useNavigate } from 'react-router-dom';


export default function Perfis() {

    const perfis = ['Sistemas Computacionais', 'Ciência de Dados',
    'Computação Científica', 'Engenharia de Software', 'Teoria da Computação'];
    
    const [perfil, tggPerfil] = useState('1');
    let atualPerfil = parseInt(perfil);

    const showPerfil = (index: any) => {
        tggPerfil(index);
    }

    const plusPerfil = (index: any) => {
        if(atualPerfil===5){
            tggPerfil('1');
        }
        else {
            tggPerfil(`${atualPerfil+1}`);
        }
    }

    const minusPerfil = (index: any) => {
        if(atualPerfil===1){
            tggPerfil('5');
        }
        else {
            tggPerfil(`${atualPerfil-1}`);
        }
    }

    const nav = useNavigate();

    return(
        <PerfilContainer>
            <FillDiv/>
            <PageHeader
            title= {`${perfis[parseInt(perfil)-1]}`}
            setP={showPerfil}
            increaseP={plusPerfil}
            decreaseP={minusPerfil}
            navType={'2'}
            switchDisp
            minheight='27vh'
            goback={() => nav(-1)}/>

            <HomeContainer style={{
                display: perfil==='1'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Computação em Nuvem'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Redes de Computadores II'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Sistemas Distribuídos'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Programação Paralela e Distribuída'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Internet das Coisas'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Tópicos Especiais em Sistemas Computacionais I'/>
            </HomeContainer>

            <HomeContainer style={{
                display: perfil==='2'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Inteligência Artificial'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Introdução ao Suporte à Decisão'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Tecnologia para Grandes Volumes de Dados'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Mineração de Dados'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Recuperação da Informação'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Gestão de Conhecimento'/>
            </HomeContainer>

            <HomeContainer style={{
                display: perfil==='3'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Séries e Transformadas em Computação'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Computação Científica com Equações Diferenciais Ordinárias'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Computação Científica com Equações Diferenciais Parciais'/>

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
                display: perfil==='4'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Interação Humano-Computador'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Engenharia de Software'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Gestão de Projetos'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Análise e Projeto de Sistemas'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Desenvolvimento Web I'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Desenvolvimento Web II'/>
            </HomeContainer>

            <HomeContainer style={{
                display: perfil==='5'?'flex':'none'
            }}>
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Organização de Dados II'/>
                
                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Compiladores'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Teoria dos Grafos'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Tópicos Especiais em Programação'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Algoritmos de Aproximação'/>

                <OptionBox
                cor={`${global.colors.azul1}`}
                title='Algoritmos Paralelos'/>
            </HomeContainer>
        </PerfilContainer>
    );
}