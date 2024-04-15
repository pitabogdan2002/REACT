import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { CellId, ICell, CellValue } from "../hooks/gameContext";

interface ITable {
    state: ICell[][];
    onClick: (cellId: CellId) => void; // Adjusted for simplicity
}

const Cell = styled.TouchableOpacity<{ value: CellValue }>`
    width: 80px;
    height: 80px;
    border: 1px solid;
    margin: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ value }) => {
    switch (value) {
        case 'ship':
            return 'gray'; // Color for ships during placement (could be hidden during attack phase)
        case 'hit':
            return 'red'; // Color for hit cells
        case 'miss':
            return 'blue'; // Color for miss cells
        default:
            return 'transparent'; // Default color
    }
}};
`

const Row = styled.View`
    display: flex;
    flex-direction: row;
`

const Table: React.FC<ITable> = ({state, onClick}) => {
    return (
        <>
            {state.map((line, rowIndex) => (
                <Row key={rowIndex}>
                    {line.map(({id, value}) => (
                        <Cell key={id} onPress={() => onClick(id)} value={value}>
                            <Text>{value === 'hit' || value === 'miss' ? value.toUpperCase() : ''}</Text>
                        </Cell>
                    ))}
                </Row>
            ))}
        </>
    );
}

export default Table;
