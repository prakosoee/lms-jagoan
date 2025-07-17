import React, { createContext, useContext } from 'react';
import { useLearning as useLearningHook } from '../features/learning/hooks/useLearning';

const LearningContext = createContext<ReturnType<typeof useLearningHook> | undefined>(undefined);

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (context === undefined) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const learning = useLearningHook();

  return (
    <LearningContext.Provider value={learning}>
      {children}
    </LearningContext.Provider>
  );
};