import React, { useEffect } from 'react';
import { SafeAreaView, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGameContext } from '../../hooks/gameContext';
import Grid from '../../componenets/Grid'; // Your custom grid component
import {GameRouteNames} from "../../router/route-names"; // Your custom grid component

const AttackScreen = () => {
    const { game, makeGuess } = useGameContext();
    const navigation = useNavigation();

    useEffect(() => {
        // Load or initialize the game as needed
    }, []);

    const handleAttack = (cellId: string) => {
        // Assuming player 1 is making a guess
        makeGuess(0, cellId);

        // Check if the game has ended or if it's the next player's turn
        // This is a simplified example; you might need more complex logic
        // @ts-ignore
        if (game?.status === 'ENDED') {
            // @ts-ignore
            Alert.alert("Game Over", "The game has ended.", [{ text: "OK", onPress: () => navigation.navigate(GameRouteNames.GAMEOVER) }]);
        } else {
            // Placeholder: Switch turns or handle the next phase of the game
        }
    };

    // @ts-ignore
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Grid state={game?.guessGrids[0]  || [[]]} onClick={handleAttack} />
            {/* Additional UI for managing turns, displaying game status, etc. */}
        </SafeAreaView>
    );
};

export default AttackScreen;
