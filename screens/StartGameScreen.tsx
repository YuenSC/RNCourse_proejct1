import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import StyledButton from "../components/StyledButton";
import StyledText from "../components/StyledText";
import Title from "../components/Title";
import { useGlobalContext } from "../globalContext";

const StartGameScreen = () => {
  const [guessNumberInString, setGuessNumberInString] = useState<string>("");
  const { confirmedNumber, setConfirmedNumber, setStep } = useGlobalContext();

  return (
    <>
      <View style={styles.titleBox}>
        <Title>Guess My Number</Title>
      </View>
      <View style={styles.numberInput__box}>
        <StyledText style={styles.numberInputBox__title}>
          Enter a Number
        </StyledText>
        <TextInput
          keyboardType="number-pad"
          maxLength={2}
          style={styles.numberInput__input}
          value={guessNumberInString}
          onChangeText={setGuessNumberInString}
        />
        <View style={styles.numberInput__buttonContainer}>
          <StyledButton
            style={{ marginRight: 10 }}
            onPress={() => setGuessNumberInString("")}
          >
            <Text style={styles.numberInput__buttonText}>Reset</Text>
          </StyledButton>
          <StyledButton
            onPress={() => {
              const guessNumber = parseInt(guessNumberInString, 10);
              if (
                !Number.isInteger(guessNumber) ||
                guessNumber < 1 ||
                guessNumber > 99
              ) {
                // alert
                Alert.alert(
                  "Invalid number",
                  "Number has to be between 1 to 99",
                  [
                    {
                      text: "okay",
                      style: "destructive",
                      onPress: () => setGuessNumberInString(""),
                    },
                  ]
                );
                return;
              }
              setConfirmedNumber(guessNumber);
              setStep(1);
            }}
          >
            <Text style={styles.numberInput__buttonText}>Confirm</Text>
          </StyledButton>
        </View>
      </View>
      <StyledText>guessNumber : {guessNumberInString}</StyledText>
      <StyledText>confirmedNumber : {confirmedNumber}</StyledText>
    </>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  titleBox: { paddingTop: 100 },

  numberInput__box: {
    backgroundColor: "black",
    borderRadius: 8,
    alignItems: "center",
    padding: 20,
    alignSelf: "stretch",
    marginHorizontal: 30,
    marginTop: 30,
    elevation: 4,
  },

  numberInputBox__title: { fontSize: 20, color: "orange" },
  numberInput__input: {
    borderBottomWidth: 1,
    minWidth: 30,
    marginTop: 20,
    marginBottom: 10,
    borderColor: "yellow",
    fontSize: 25,
    color: "orange",
    textAlign: "center",
  },
  numberInput__buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  numberInput__button: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 10,
    padding: 6,
    alignItems: "center",
    color: "white",
  },
  numberInput__buttonText: {
    color: "white",
  },
});
