import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

// Assuming loadGame is a function you've defined to load game data
import { loadGame } from '../api';
import { useAuth } from './authContext';

export type CellId = string;
export type CellValue = 'empty' | 'ship' | 'hit' | 'miss';

export interface ICell {
    value: CellValue;
    id: CellId;
}

interface User {
    createdAt: string;
    user: any;
    game?: string;
    userId: number;
    gameId: number;
}

interface Move {
    createdAt: string;
    userId: number;
    cell: CellId;
    gameId: number;
}

enum GameStatus {
    OPEN = "open",
    PLACEMENT = "placement",
    ATTACKING = "attacking",
    ENDED = "ended",
}

interface Game {
    createdAt: string;
    id: number;
    users: User[];
    winnerId: number | null;
    moves: Move[];
    playerToMove: number;
    status: GameStatus;
    shipGrids: ICell[][][]; // Array of two grids, one for each player
    guessGrids: ICell[][][]; // Array of two grids, one for each player
}

interface GameContextValue {
    game: Game | null;
    loadGame: (id: number) => Promise<void>;
    placeShip: (playerIndex: number, cellIds: CellId[]) => void;
    makeGuess: (playerIndex: number, cellId: CellId) => void;
}

const Context = createContext<GameContextValue>({
    loadGame: async (id: number) => {},
    game: null,
    placeShip: (playerIndex: number, cellIds: CellId[]) => {},
    makeGuess: (playerIndex: number, cellId: CellId) => {},
});

const createEmptyGrid = (): ICell[][] => Array(10).fill(null).map((_, rowIndex) =>
    Array(10).fill(null).map((_, colIndex) => ({
        id: `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`,
        value: 'empty',
    }))
);

export const GameContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [game, setGame] = useState<Game | null>(null);
    const auth = useAuth();

    const handleLoadGame = async (id: number) => {
        // Placeholder for loading game data
        const gameData = await loadGame(auth.token, id); // Simulate API call
        setGame(gameData);
    };

    const placeShip = (playerIndex: number, cellIds: CellId[]) => {
        if (!game) return;

        const newShipGrids = [...game.shipGrids];
        cellIds.forEach(cellId => {
            const row = cellId.charCodeAt(0) - 65;
            const col = parseInt(cellId.substring(1)) - 1;
            newShipGrids[playerIndex][row][col].value = 'ship';
        });

        setGame({ ...game, shipGrids: newShipGrids });
    };

    const makeGuess = (playerIndex: number, cellId: CellId) => {
        if (!game) return;

        const opponentIndex = 1 - playerIndex;
        const row = cellId.charCodeAt(0) - 65;
        const col = parseInt(cellId.substring(1)) - 1;
        const cellValue = game.shipGrids[opponentIndex][row][col].value;

        const newGuessGrids = [...game.guessGrids];
        newGuessGrids[playerIndex][row][col].value = cellValue === 'ship' ? 'hit' : 'miss';

        setGame({ ...game, guessGrids: newGuessGrids });
    };

    useEffect(() => {
        // Initialize empty grids
        if (!game) {
            setGame({
                createdAt: new Date().toISOString(),
                id: 1,
                users: [],
                winnerId: null,
                moves: [],
                playerToMove: 0,
                status: GameStatus.OPEN,
                shipGrids: [createEmptyGrid(), createEmptyGrid()],
                guessGrids: [createEmptyGrid(), createEmptyGrid()],
            });
        }
    }, [game]);

    return (
        <Context.Provider value={{ loadGame: handleLoadGame, game, placeShip, makeGuess }}>
            {children}
        </Context.Provider>
    );
};

export const useGameContext = () => useContext(Context);
``
