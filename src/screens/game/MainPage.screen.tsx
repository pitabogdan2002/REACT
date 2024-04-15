import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useAuth } from "../../hooks/authContext"
import { Text, Button } from "react-native"
import styled from "styled-components/native";
import {AuthRouteNames, GameRouteNames} from "../../router/route-names";
import MainPage from "../../componenets/MainPage";



const Container = styled.View`
display: flex;
    flex-direction: column;
    gap: 4px;
`




const MainPageScreen = () => {
    const navigation = useNavigation<any>()

    const handleGoToUserDetails= () => {
        navigation.navigate(GameRouteNames.USERDETAILS)
    }

    const handleGoToLobby= () =>
    {
        navigation.navigate(GameRouteNames.LOBBY)
    }

    return <MainPage goToUserDetails={handleGoToUserDetails} goToLobby={handleGoToLobby}/>
}

export default MainPageScreen