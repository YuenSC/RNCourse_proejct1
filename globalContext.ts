import React, { useContext } from "react";

export type Record = {
  id: string;
  guessNumber: number;
};

type GlobalContextType = {
  confirmedNumber?: number;
  setConfirmedNumber: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  records: Record[];
  setRecords: React.Dispatch<React.SetStateAction<Record[]>>;
  onStartNewGame: () => void;
};

const GlobalContext = React.createContext<GlobalContextType>({
  step: 0,
  setStep: () => undefined,
  setConfirmedNumber: () => undefined,
  records: [],
  setRecords: () => undefined,
  onStartNewGame: () => undefined,
});

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider = GlobalContext.Provider;
