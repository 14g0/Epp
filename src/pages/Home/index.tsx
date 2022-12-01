import OptionBox from "../../components/Optionbox";
import { Board, HomeContainer, HomeFooter, SearchBar, SearchIcon, SearchInput } from "./style";
import { global } from "../../globalStyles";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <HomeContainer>
            <Board src={require('../../assets/E++logo.png')}/>

            <SearchBar>
                <SearchIcon src={require('../../assets/SearchIcon.png')}/>
                <SearchInput
                placeholder="Pesquise por uma matéria"/>
            </SearchBar>

                <Link to='/Epp/periodos'>
                    <OptionBox
                    title = "Disciplina por período"
                    cor = {`${global.colors.azul1}`}
                    />
                </Link>

                <Link to='/Epp/perfis'>
                    <OptionBox
                    title = "Disciplina por perfil"
                    cor = {`${global.colors.azul2}`}
                    />
                </Link>

                <OptionBox
                title = "Diagrama de Disciplinas"
                cor = {`${global.colors.azul3}`}
                />

            <HomeFooter>Feitos por alunos do BCC epp@gmail.com</HomeFooter>
        </HomeContainer>
    );
}