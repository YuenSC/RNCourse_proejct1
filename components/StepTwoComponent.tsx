import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { useGlobalContext } from "../globalContext";
import StyledButton from "./StyledButton";
import Title from "./Title";

const StepTwoComponent = () => {
  const { step, setStep, confirmedNumber = 0 } = useGlobalContext();
  const [records, setRecords] = useState([]);
  const computerGuessNumber = Math.floor(Math.random() * 100);
  const isLargerThanConfirmedNumber = confirmedNumber > computerGuessNumber;
  const isSmallerThanConfirmedNumber = confirmedNumber < computerGuessNumber;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <View style={styles.guessBox}>
        <Text style={styles.guessBox__text}>
          {Math.floor(Math.random() * 100)}
        </Text>
      </View>

      <View style={styles.responseBox}>
        <Text style={styles.responseBox__title}>Higher or lower?</Text>
        <View style={styles.responseBox__buttonContainer}>
          <StyledButton onPress={() => setStep(0)} style={{ marginRight: 10 }}>
            <Text style={styles.responseBox__buttonText}>{"-"}</Text>
          </StyledButton>
          <StyledButton onPress={() => setStep(0)}>
            <Text style={styles.responseBox__buttonText}>{"+"}</Text>
          </StyledButton>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <StyledButton onPress={() => setStep(0)} style={{}}>
          <Text style={{ color: "white" }}>Return</Text>
        </StyledButton>
      </View>
      <Text>{confirmedNumber}</Text>
    </View>
  );
};

export default StepTwoComponent;

const styles = StyleSheet.create({
  container: { marginTop: 25, alignSelf: "stretch", padding: 10 },
  title: { textAlign: "center", paddingVertical: 15, fontSize: 25 },
  guessBox: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "orange",
    padding: 10,
    paddingVertical: 20,
    marginTop: 20,
    marginHorizontal: 30,
  },
  guessBox__text: {
    textAlign: "center",
    color: "orange",
    fontSize: 30,
    fontWeight: "bold",
  },
  responseBox: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 40,
  },
  responseBox__title: { textAlign: "center", fontSize: 25, color: "orange" },
  responseBox__buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  responseBox__buttonText: { color: "white", fontSize: 20 },
});
