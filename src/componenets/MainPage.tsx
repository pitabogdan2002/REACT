import React, {useState} from "react";
import {View, Text} from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AuthRouteNames, GameRouteNames } from "../router/route-names";
import {ILogin} from "./Login";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export interface IMainPage {
    goToUserDetails: () => void;
    goToLobby: () => void;
}

const Button = styled.TouchableOpacity`
`
const MainPage: React.FC<IMainPage> = ({goToUserDetails, goToLobby}) => {

    return (
        <Container>
            <Button onPress={goToUserDetails}>
            <Text>User Details</Text>
        </Button>
            <Button onPress={goToLobby}>
                <Text>Lobby</Text>
            </Button>
        </Container>
    );
};

export default MainPage;
