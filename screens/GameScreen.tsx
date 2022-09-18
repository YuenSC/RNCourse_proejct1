import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import StyledButton from "../components/StyledButton";
import Title from "../components/Title";
import { useGlobalContext } from "../globalContext";

type Record = {
  id: string;
  guessNumber: number;
};

let computerGuessNumber = Math.floor(Math.random() * 100);
let upperBoundGuess = 99;
let lowerBoundGuess = 1;

const GameScreen = () => {
  const { setStep, confirmedNumber = 0 } = useGlobalContext();
  const [records, setRecords] = useState<Record[]>([]);

  const handleWrongHint = () => {
    Alert.alert("Don't lie!", "You know that this is wrong", [
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const handleWrongGuess = () => {
    setRecords((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 1000000).toString(),
        guessNumber: computerGuessNumber,
      },
    ]);

    if (confirmedNumber > computerGuessNumber) {
      lowerBoundGuess = computerGuessNumber;
    }
    if (confirmedNumber < computerGuessNumber) {
      upperBoundGuess = computerGuessNumber;
    }

    computerGuessNumber =
      lowerBoundGuess +
      Math.floor(Math.random() * (upperBoundGuess - lowerBoundGuess + 1));
  };

  const handleSuccesGuess = () => {
    setStep(2);
  };

  const handleGuess = (isLowerGuess: boolean) => {
    if (
      (!isLowerGuess && computerGuessNumber > confirmedNumber) ||
      (isLowerGuess && computerGuessNumber < confirmedNumber)
    ) {
      handleWrongHint();
      return;
    }

    handleWrongGuess();
  };

  if (confirmedNumber === computerGuessNumber) {
    handleSuccesGuess();
    return null;
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <View style={styles.guessBox}>
        <Text style={styles.guessBox__text}>{computerGuessNumber}</Text>
      </View>

      <View style={styles.responseBox}>
        <Text style={styles.responseBox__title}>Higher or lower?</Text>
        <View style={styles.responseBox__buttonContainer}>
          <StyledButton
            onPress={() => handleGuess(true)}
            style={{ marginRight: 10 }}
          >
            <Text style={styles.responseBox__buttonText}>{"-"}</Text>
          </StyledButton>
          <StyledButton onPress={() => handleGuess(false)}>
            <Text style={styles.responseBox__buttonText}>{"+"}</Text>
          </StyledButton>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <StyledButton onPress={() => setStep(0)} style={{}}>
          <Text style={{ color: "white" }}>Return</Text>
        </StyledButton>
      </View>
      <View>
        {records.map((record) => {
          return (
            <View key={record.id}>
              <Text>{record.guessNumber}</Text>
            </View>
          );
        })}
      </View>
      <Text>confirmedNumber : {confirmedNumber}</Text>
      <Text>upperBoundGuess : {upperBoundGuess}</Text>
      <Text>lowerBoundGuess : {lowerBoundGuess}</Text>
    </View>
  );
};

export default GameScreen;

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
