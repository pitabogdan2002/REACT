import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import { useGameContext } from '../../hooks/gameContext';
import { useNavigation } from '@react-navigation/native';
import {GameRouteNames} from "../../router/route-names";

const GameOverScreen = () => {
    const { game } = useGameContext();
    const navigation = useNavigation();

    // Determine the winner's name or ID. Adjust this based on how you're tracking winners in your game state.
    const winner = game?.winnerId ? `Player ${game.winnerId}` : 'No one';

    // Handler to restart the game, could navigate to the setup or ship placement screen
    const handleRestart = () => {
        // @ts-ignore
        navigation.navigate(GameRouteNames.MAINPAGE); // Or your start screen
    };

    // Handler to go back to the main menu or exit
    const handleExit = () => {
        // @ts-ignore
        navigation.navigate(GameRouteNames.MAINPAGE); // Adjust based on your app's navigation structure
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Game Over</Text>
            <Button title="Restart Game" onPress={handleRestart} />
            <Button title="Exit to Main Menu" onPress={handleExit} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    winnerText: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default GameOverScreen;