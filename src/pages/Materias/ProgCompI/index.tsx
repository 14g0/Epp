import Materia from "../../../components/MateriaDiv";


export default function ProgComp1() {
    return (
        <Materia
        titulo='Programação de Computadores I'
        codigo='ICP131'
        credito='4.0'
        periodo='1'
        horaPrat='15'
        horaTeo='45'
        preReq='Nenhum'
        habilita='Nenhum'
        ementa={<>
            <li>Resolução de problemas de forma algorítimica</li>
            <li>Funções e modularização</li>
            <li>Recurssão</li>
            <li>Variáveis, expressões</li>
            <li>Controle de fluxo e repetições</li>
            <li>Tipos básicos e estruturados</li>
            <li>Tipos abstratos de dados</li>
            <li>Vetores e matrizes</li>
            <li>Cadeias de caracteres</li>
            <li>Documentação, legibilidade, manutenção e 
                eficiência de programas</li>
        </>}/>
    );
};