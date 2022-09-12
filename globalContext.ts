import React, { useContext } from "react";

type GlobalContextType = {
  confirmedNumber?: number;
  setConfirmedNumber: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const GlobalContext = React.createContext<GlobalContextType>({
  step: 0,
  setStep: () => undefined,
  setConfirmedNumber: () => undefined,
});

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider = GlobalContext.Provider;
