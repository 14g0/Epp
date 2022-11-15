import React from "react";
import OptionBox from "../../components/Optionbox";
import { Board, Container, HomeFooter, SearchBar, SearchIcon, SearchInput } from "./style";
import { global } from "../../globalStyles";

export default function Home() {
    return(
        <Container>
            <Board src={require('../../assets/E++logo.png')}/>

            <SearchBar>
                <SearchIcon src={require('../../assets/SearchIcon.png')}/>
                <SearchInput
                placeholder="Pesquise por uma matéria"/>
            </SearchBar>

            <OptionBox
            title = "Disciplina por período"
            cor = {`${global.colors.azul1}`}
            />

            <OptionBox
            title = "Disciplina por período"
            cor = {`${global.colors.azul2}`}
            />

            <OptionBox
            title = "Disciplina por período"
            cor = {`${global.colors.azul3}`}
            />

            <HomeFooter>Feitos por alunos do BCC epp@gmail.com</HomeFooter>
        </Container>
    );
}