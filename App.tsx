import {
  Comfortaa_300Light,
  Comfortaa_400Regular,
  Comfortaa_500Medium,
  Comfortaa_600SemiBold,
  Comfortaa_700Bold,
  useFonts,
} from "@expo-google-fonts/comfortaa";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import { GlobalContextProvider, Record } from "./globalContext";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [step, setStep] = useState(0);
  const [confirmedNumber, setConfirmedNumber] = useState(0);
  const [records, setRecords] = useState<Record[]>([]);

  const [fontLoaded] = useFonts({
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <GlobalContextProvider
      value={{
        step,
        setStep,
        setConfirmedNumber,
        confirmedNumber,
        records,
        setRecords,
        onStartNewGame: () => {
          setRecords([]);
          setConfirmedNumber(0);
          setStep(0);
        },
      }}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.container}
        resizeMode="cover"
        onLayout={onLayoutRootView}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgb(165,42,42)", "rgb(225,215,28)"]}
          style={styles.background}
        />
        <SafeAreaView
          style={{ alignSelf: "stretch", alignItems: "center", flex: 1 }}
        >
          {step === 0 && <StartGameScreen />}
          {step === 1 && <GameScreen />}
          {step === 2 && <GameOverScreen />}
        </SafeAreaView>
      </ImageBackground>
    </GlobalContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.75,
  },
});
