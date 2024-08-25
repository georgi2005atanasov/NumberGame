import React from 'react';
import { View, StyleSheet } from 'react-native';
import EnterNumber from './components/EnterNumber';
import GuessNumber from './components/GuessNumber';

const App: React.FC = () => {
  return (
      <View style={styles.background}>
        <EnterNumber />
        <GuessNumber />
      </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,             // Takes up the full height of the screen
    resizeMode: 'cover',
    margin: 40,
  },
  container: {
    flex: 1,                // Takes up the full height of the screen
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center',     // Centers the content horizontally
    padding: 20,            // Adds padding inside the container
    backgroundColor: '#f0f0f0', // Sets a light gray background color
  },
});

export default App;
