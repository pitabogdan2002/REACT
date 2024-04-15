import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import {useAuth} from "../../hooks/authContext";

const Container = styled.View`
display: flex;
    flex-direction: column;
    gap: 4px;
`

const UserDetailsScreen = () => {
    const navigation = useNavigation();
    const  user  = useAuth();

    return (
        <Container>
            <Text>User Details</Text>


        </Container>
    );
};

export default UserDetailsScreen;