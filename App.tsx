import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import StepOneComponent from "./components/StepOneComponent";
import StepTwoComponent from "./components/StepTwoComponent";
import { GlobalContextProvider } from "./globalContext";

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
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(165,42,42,1)", "rgba(225,215,28,0.2)"]}
          style={styles.background}
        />
        {step === 0 && <StepOneComponent />}
        {step === 1 && <StepTwoComponent />}
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
  },
});
