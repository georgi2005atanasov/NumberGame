import React, { useState } from 'react';
import alert from '../utilities/alert';
import { View, Text, TextInput, StyleSheet, Pressable, Platform } from 'react-native';

const EnterNumber = () => {
    const [number, setNumber] = useState<string>(''); // Store input as a string

    const handleSubmit = () => {
        const numericValue = parseInt(number as any, 10);

        console.log(numericValue);
        if (isNaN(numericValue)) {
            alert('Please enter a valid number.');
        } else {
            alert(`You entered: ${numericValue}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Choose a number between 1 and 100:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type here..."
                keyboardType="numeric"
                value={`${number}`}
                onChangeText={setNumber}
                underlineColorAndroid="transparent"
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
