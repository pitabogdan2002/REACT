import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components/native";
import Register from "./src/componenets/Register";
import Login from "./src/componenets/Login";
import {AuthContextProvider} from "./src/hooks/authContext";
import Router from "./src/router";

const Container = styled.SafeAreaView`
  height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid yellow;
    gap: 40px;
`

export default function App() {
  return (
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
  );
}



