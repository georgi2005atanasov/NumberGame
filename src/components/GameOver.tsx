import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGameContext, GamePhases } from '../contexts/GameProvider';

const GameOver = () => {
    const { gamePhase, retries } = useGameContext();

    if (gamePhase !== GamePhases.FinishedGame) {
        return <></>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Game Over!</Text>
            <Text style={styles.text}>The computer guessed your number in {retries} attempts!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FF6347',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
    },
});

export default GameOver;
