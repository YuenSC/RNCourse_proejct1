import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";

import StyledButton from "../components/StyledButton";
import StyledText from "../components/StyledText";
import Title from "../components/Title";
import { useGlobalContext } from "../globalContext";

// min : inclusive, max : exclusive
const getGuessNumber = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max - min));
};

let upperBoundGuess = 100;
let lowerBoundGuess = 1;
const initialGuess = getGuessNumber(lowerBoundGuess, upperBoundGuess);

const GameScreen = () => {
  const [computerGuessNumber, setComputerGuessNumber] = useState(initialGuess);
  const {
    setStep,
    confirmedNumber = 0,
    records,
    setRecords,
    onStartNewGame,
  } = useGlobalContext();

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

    if (confirmedNumber > computerGuessNumber)
      lowerBoundGuess = computerGuessNumber + 1;

    if (confirmedNumber < computerGuessNumber)
      upperBoundGuess = computerGuessNumber;

    setComputerGuessNumber(getGuessNumber(lowerBoundGuess, upperBoundGuess));
  };

  const handleSuccesGuess = () => {
    handleReset();
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

  const handleReset = () => {
    upperBoundGuess = 100;
    lowerBoundGuess = 0;
    setComputerGuessNumber(getGuessNumber(lowerBoundGuess, upperBoundGuess));
  };

  if (confirmedNumber === computerGuessNumber) {
    handleSuccesGuess();
    return null;
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <View style={styles.guessBox}>
        <StyledText style={styles.guessBox__text}>
          {computerGuessNumber}
        </StyledText>
      </View>

      <View style={styles.responseBox}>
        <Text style={styles.responseBox__title}>Higher or lower?</Text>
        <View style={styles.responseBox__buttonContainer}>
          <StyledButton
            onPress={() => handleGuess(true)}
            style={{ marginRight: 10 }}
          >
            <Entypo name="minus" size={24} color="white" />
          </StyledButton>
          <StyledButton onPress={() => handleGuess(false)}>
            <Entypo name="plus" size={24} color="white" />
          </StyledButton>
        </View>
      </View>

      <View style={styles.guessRecord_container}>
        <FlatList
          data={records}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.guessRecord_rowContainer}>
                <StyledText>{`#${index + 1}`}</StyledText>
                <StyledText
                  style={styles.guessRecord_text}
                >{`Opponent's guess: ${item.guessNumber}`}</StyledText>
              </View>
            );
          }}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <StyledButton
          onPress={() => {
            onStartNewGame();
            handleReset();
          }}
        >
          <StyledText style={{ color: "white" }}>Return</StyledText>
        </StyledButton>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignSelf: "stretch",
    padding: 10,
    flex: 1,
  },
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
  guessRecord_container: {
    flex: 1,
    marginVertical: 10,
  },
  guessRecord_rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 8,
  },
  guessRecord_text: {},
});
