import {View, TextInput, Button} from "react-native";
import styled from "styled-components/native";
import {useState} from "react";
import {register} from "../api";

const Container = styled.View`
display: flex;
    flex-direction: column;
    gap: 4px;
`


const Input = styled.TextInput`
    padding: 4px;
    font-size: 30px;
    border: 1px solid black;
`
export interface ILogin {
    onSubmit: (email: string, password: string) => void
}


const Register: React.FC<ILogin> = ({onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => onSubmit(email, password);
    return (<Container>
        <Input onChangeText = {setEmail} keyboardType={'email-address'}></Input>
        <Input  onChangeText = {setPassword} secureTextEntry></Input>
        <Button title={"Register"} onPress ={handleSubmit}/>
    </Container>
    )

}

export default Register