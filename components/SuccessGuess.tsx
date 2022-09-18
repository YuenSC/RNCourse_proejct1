import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useGlobalContext } from "../globalContext";
import StyledButton from "./StyledButton";

const SuccessGuess = () => {
  const { setStep } = useGlobalContext();
  return (
    <View style={styles.container}>
      <Text>SuccessGuess</Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <StyledButton onPress={() => setStep(0)} style={{}}>
          <Text style={{ color: "white" }}>Return</Text>
        </StyledButton>
      </View>
    </View>
  );
};

export default SuccessGuess;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
