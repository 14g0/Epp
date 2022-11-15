import InputBox from "../../components/InputBox";
import { Container } from "./style";
import OptionBox from "../../components/Optionbox";


export default function Login() {
    return(
        <Container>
            <InputBox
            datatype='Login'
            holdertxt='Insira seu Login'
            type="email"/>
            <InputBox
            datatype= 'Senha'
            holdertxt='Insira sua senha'
            type = 'password'/>
        </Container>
    );
};