import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";

import SuccessGuess from "./components/SuccessGuess";
import { GlobalContextProvider } from "./globalContext";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [step, setStep] = useState(0);
  const [confirmedNumber, setConfirmedNumber] = useState(0);

  return (
    <GlobalContextProvider
      value={{ step, setStep, setConfirmedNumber, confirmedNumber }}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.container}
        resizeMode="cover"
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgb(165,42,42)", "rgb(225,215,28)"]}
          style={styles.background}
        />
        {step === 0 && <StartGameScreen />}
        {step === 1 && <GameScreen />}
        {step === 2 && <SuccessGuess />}
      </ImageBackground>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.75,
  },
});
