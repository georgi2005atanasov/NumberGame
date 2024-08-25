import React from 'react';
import alert from '../utilities/alert';
import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';
import { useGameContext } from '../contexts/GameProvider';
import { GamePhases } from '../contexts/GameProvider';

const EnterNumber = () => {
    const {
        number,
        setNumber,
        gamePhase,
        setGamePhase,
    } = useGameContext();

    const handleSubmit = () => {
        const numericValue = parseInt(number as any, 10);

        if (isNaN(numericValue)) {
            alert('Please enter a valid number.');
            return;
        }

        if (numericValue > 100 || numericValue < 0) {
            alert('Please enter a valid number.');
            return;
        }

        setGamePhase(GamePhases.GuessingNumber);
    };

    const handleChange = (text: string) => {
        const numericValue = parseInt(text, 10);
        if (!isNaN(numericValue)) {
            setNumber(numericValue);
        } else {
            setNumber(null);
        }
    };

    if (gamePhase !== GamePhases.ChoosingNumber) {
        return <></>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Choose a number between 0 and 100:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here..."
                keyboardType={Platform.OS === 'ios' ? 'decimal-pad' : 'numeric'}
                value={number || number === 0 ? `${number}` : ''}
                onChangeText={handleChange}
                underlineColorAndroid="transparent"
                inputMode={Platform.OS === 'web' ? 'decimal' : undefined}
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',  // Only bottom border, no other borders
        marginBottom: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        color: '#333',
        ...Platform.select({
            android: {
                outlineStyle: 'none',
                borderWidth: 0,
            },
            ios: {
                outlineStyle: 'none',
                borderWidth: 0,
            },
            web: {
                outlineStyle: 'none',
            },
        }),
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EnterNumber;
