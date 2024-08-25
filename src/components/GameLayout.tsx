import React from 'react';
import EnterNumber from './EnterNumber';
import { GameProvider } from '../contexts/GameProvider';
import GuessNumber from './GuessNumber';
import GameOver from './GameOver';

const GameLayout = () => {
    return <>
        <GameProvider>
            <EnterNumber />
            <GuessNumber />
            <GameOver />
        </GameProvider>
    </>;
};

export default GameLayout;
