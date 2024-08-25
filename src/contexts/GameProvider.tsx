import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

export enum GamePhases {
  ChoosingNumber,
  GuessingNumber,
  FinishedGame
}

interface GameContextType {
  number: number | null;
  setNumber: (num: number | null) => void;
  gamePhase: GamePhases;
  setGamePhase: (phase: GamePhases) => void;
  retries: number;
  setRetries: Dispatch<SetStateAction<number>>;
}

interface GameProviderProps {
  children: ReactNode;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [number, setNumber] = useState<number | null>(null);
  const [gamePhase, setGamePhase] = useState<GamePhases>(GamePhases.ChoosingNumber);
  const [retries, setRetries] = useState<number>(0);

  return (
    <GameContext.Provider value={{ number, setNumber, gamePhase, setGamePhase, retries, setRetries }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
