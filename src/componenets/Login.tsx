import {View, TextInput, Text, Alert} from "react-native";
import styled from "styled-components/native";
import React, {useState} from "react";
import {login, register} from "../api";
import {useNavigation} from "@react-navigation/native";
import MainPageScreen from "../screens/game/UserDetails.screen";

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
    onSubmit: (email: string, password: string) => void;
    goToRegister: () => void;
}
const Button = styled.TouchableOpacity`
`


const Login: React.FC<ILogin> = ({onSubmit, goToRegister}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSubmit = () => {
        onSubmit(email, password);
    }

    return (
        <Container>
            <Input keyboardType="email-address" onChangeText={setEmail}/>
            <Input secureTextEntry onChangeText={setPassword}/>
            <Button onPress={handleSubmit}>
                <Text>Submit</Text>
            </Button>
            <Button onPress={goToRegister}>
                <Text>Register</Text>
            </Button>
        </Container>
    )
}

export default Login;