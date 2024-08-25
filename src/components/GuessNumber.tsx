import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const GuessNumber = () => {
    const [currentGuess, setCurrentGuess] = useState<number>(50);
    const [min, setMin] = useState<number>(1);
    const [max, setMax] = useState<number>(100);

    const handleLower = () => {
        // handle lower
    };

    const handleHigher = () => {
        // handle higher
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handleLower} style={styles.arrowButton}>
                <Text style={styles.arrowText}>⬇️</Text>
            </Pressable>
            <View style={styles.guessContainer}>
                <Text style={styles.guessText}>{currentGuess}</Text>
            </View>
            <Pressable onPress={handleHigher} style={styles.arrowButton}>
                <Text style={styles.arrowText}>⬆️</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    arrowButton: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    arrowText: {
        fontSize: 30,
        color: '#fff',
    },
    guessContainer: {
        padding: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        minWidth: 100,
    },
    guessText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});

export default GuessNumber;
