import React from "react";
import { Image, StyleSheet, View } from "react-native";

import StyledButton from "../components/StyledButton";
import StyledText from "../components/StyledText";
import Title from "../components/Title";
import { useGlobalContext } from "../globalContext";

const GameOverScreen = () => {
  const { confirmedNumber, records, onStartNewGame } = useGlobalContext();

  return (
    <View style={styles.container}>
      <Title>GAME OVER !</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.successLogo}
          source={require("../assets/success.png")}
        />
      </View>

      <View>
        <StyledText
          style={{
            textAlign: "center",
            marginVertical: 30,
            paddingHorizontal: 10,
            fontSize: 20,
          }}
        >
          Your phone needed{" "}
          <StyledText style={styles.highlightNumber}>
            {records.length}
          </StyledText>{" "}
          rounds to guess the number{" "}
          <StyledText style={styles.highlightNumber}>
            {confirmedNumber}
          </StyledText>
        </StyledText>
      </View>

      <StyledButton
        onPress={onStartNewGame}
        style={{
          flex: 0,
        }}
      >
        <StyledText style={{ color: "white", padding: 10 }}>
          Start New Game
        </StyledText>
      </StyledButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: { marginTop: 30 },
  successLogo: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 1,
  },
  highlightNumber: {
    fontWeight: "bold",
    fontFamily: "Comfortaa_700Bold",
    color: "purple",
  },
});
