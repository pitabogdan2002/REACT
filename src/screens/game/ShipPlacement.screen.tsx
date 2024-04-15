import React, { useEffect } from 'react';
import { SafeAreaView, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGameContext } from '../../hooks/gameContext';
import Grid from '../../componenets/Grid';
import {GameRouteNames} from "../../router/route-names"; // Your custom grid component

const ShipPlacementScreen = () => {
    const { game, placeShip } = useGameContext();
    const navigation = useNavigation();

    useEffect(() => {
        // Assuming loadGame initializes or loads a game
        // gameCtx.loadGame(route.params.gameId) // Uncomment and adjust based on your setup
    }, []);

    const handlePlaceShip = (cellId: string) => {
        // Placeholder: Implement logic for placing ships based on your game rules
        // This example assumes placing a single ship; you'll likely need a more complex logic
        placeShip(0, [cellId]); // Example for player 1 placing a ship at `cellId`
    };

    const confirmPlacementAndProceed = () => {
        // Placeholder: Verify all ships are placed according to your game rules
        // Navigate to AttackScreen after confirmation
        // @ts-ignore
        navigation.navigate(GameRouteNames.ATTACK);
    };

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Grid
                state={game?.shipGrids[0] || [[]]} // Providing an empty grid as fallback
                onClick={handlePlaceShip}
            />
            <Button title="Confirm Ship Placement" onPress={confirmPlacementAndProceed} />
        </SafeAreaView>
    );
};

export default ShipPlacementScreen;
