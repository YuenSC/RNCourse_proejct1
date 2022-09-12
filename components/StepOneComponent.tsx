import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useGlobalContext } from "../globalContext";
import StyledButton from "./StyledButton";
import Title from "./Title";

const StepOneComponent = () => {
  const [guessNumber, setGuessNumber] = useState<number | null>(null);
  const { confirmedNumber, setConfirmedNumber, setStep } = useGlobalContext();

  return (
    <>
      <View style={styles.titleBox}>
        <Title>Guess My Number</Title>
      </View>
      <View style={styles.numberInput__box}>
        <Text style={styles.numberInputBox__title}>Enter a Number</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.numberInput__input}
          value={guessNumber?.toString() ?? ""}
          onChangeText={(text) => setGuessNumber(text ? parseInt(text) : null)}
        />
        <View style={styles.numberInput__buttonContainer}>
          <StyledButton
            style={{ marginRight: 10 }}
            onPress={() => setGuessNumber(null)}
          >
            <Text style={styles.numberInput__buttonText}>Reset</Text>
          </StyledButton>
          <StyledButton
            onPress={() => {
              if (guessNumber) {
                // range is 1 to 100
                if (guessNumber > 100 || guessNumber <= 0) {
                  return;
                }
                setConfirmedNumber(guessNumber);
                setStep(1);
              }
            }}
          >
            <Text style={styles.numberInput__buttonText}>Confirm</Text>
          </StyledButton>
        </View>
      </View>
      <Text>guessNumber : {guessNumber}</Text>
      <Text>confirmedNumber : {confirmedNumber}</Text>
    </>
  );
};

export default StepOneComponent;

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
