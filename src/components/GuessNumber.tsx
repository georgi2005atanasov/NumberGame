import React, { useState, useEffect } from 'react';
import { GamePhases } from '../contexts/GameProvider';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import alert from '../utilities/alert';
import { useGameContext } from '../contexts/GameProvider';

const GuessNumber = () => {
    const { gamePhase, setGamePhase, number, setRetries } = useGameContext();

    const [currentGuess, setCurrentGuess] = useState<number>(50);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(100);

    useEffect(() => {
        if (gamePhase === GamePhases.GuessingNumber) {
            setMin(0);
            setMax(100);
            setCurrentGuess(50);
        }
    }, [gamePhase]);

    useEffect(() => {
        if (currentGuess === number) {
            setGamePhase(GamePhases.FinishedGame);
        }
    }, [currentGuess, number, setGamePhase]);

    const handleLower = () => {
        if (number !== null && currentGuess <= number) {
            alert("You're lying!", "The number can't be lower!");
        } else {
            setMax(currentGuess - 1);
            const nextGuess = Math.floor((min + currentGuess) / 2);
            setCurrentGuess(nextGuess);
        }
        setRetries(prev => prev + 1);
    };

    const handleHigher = () => {
        if (number !== null && currentGuess >= number) {
            alert("You're lying!", "The number can't be higher!");
        } else {
            setMin(currentGuess + 1);
            const nextGuess = Math.ceil((max + currentGuess) / 2);
            setCurrentGuess(nextGuess);
        }
        setRetries(prev => prev + 1);
    };

    if (gamePhase !== GamePhases.GuessingNumber) {
        return <></>;
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Computer is Guessing Your Number</Text>
                <View style={styles.guessContainer}>
                    <Pressable onPress={handleLower} style={styles.arrowButton}>
                        <Text style={styles.arrowText}>⬇️</Text>
                    </Pressable>
                    <View style={styles.numberContainer}>
                        <Text style={styles.numberText}>{currentGuess}</Text>
                    </View>
                    <Pressable onPress={handleHigher} style={styles.arrowButton}>
                        <Text style={styles.arrowText}>⬆️</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        padding: 20,
        paddingTop: Platform.OS === 'android' ? 60 : 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    guessContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 8,
    },
    arrowButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 10,
    },
    arrowText: {
        fontSize: 30,
        color: '#fff',
    },
    numberContainer: {
        borderWidth: 1,
        borderColor: '#FF6347',
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 15,
        margin: 10,
    },
    numberText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default GuessNumber;
