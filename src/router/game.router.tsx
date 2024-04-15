import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {AuthRouteNames, GameRouteNames} from './route-names';
import { Text } from 'react-native'
import TableScreen from '../screens/game/Table.screen';
import UserDetailsScreen from "../screens/game/UserDetails.screen";
import LobbyScreen from '../screens/game/Lobby.screen';
import MainPageScreen from "../screens/game/MainPage.screen";
import ShipPlacementScreen from "../screens/game/ShipPlacement.screen";
import AttackScreen from "../screens/game/Attack.screen";
import GameOverScreen from "../screens/game/GameOver.screen"

const GameStack = createNativeStackNavigator()

const gameRoutes = (

    <GameStack.Navigator>
        <GameStack.Screen
            name={GameRouteNames.MAINPAGE}
            component={MainPageScreen} // Add MainPage screen component
            options={{
                headerTitle: (props) => <Text {...props}>Main Page</Text>
            }}
        />
        <GameStack.Screen name={GameRouteNames.USERDETAILS} component={UserDetailsScreen} options={{
            headerTitle: (props) => <Text {...props}>User Details</Text>
        }}/>
        <GameStack.Screen name={GameRouteNames.LOBBY} component={LobbyScreen} options={{
            header: () => null,
        }}/>
        <GameStack.Screen name={GameRouteNames.TABLE} component={TableScreen} options={{
            headerTitle: (props) => <Text {...props}>Game</Text>
        }}/>
        <GameStack.Screen name={GameRouteNames.SHIPPLACEMENT} component={ShipPlacementScreen} options={{
            headerTitle: (props) => <Text {...props}>Ships Placement</Text>
        }}/>
        <GameStack.Screen name={GameRouteNames.ATTACK} component={AttackScreen} options={{
            headerTitle: (props) => <Text {...props}>Attack</Text>
        }}/>
        <GameStack.Screen name={GameRouteNames.GAMEOVER} component={GameOverScreen} options={{
            headerTitle: (props) => <Text {...props}>Game Over</Text>
        }}/>
    </GameStack.Navigator>

)

export default gameRoutes;