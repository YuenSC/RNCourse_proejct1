import React, { FC, PropsWithChildren } from "react";
import { Platform, StyleSheet, TextProps } from "react-native";

import StyledText from "./StyledText";

const Title: FC<PropsWithChildren<TextProps>> = ({
  children,
  style,
  ...props
}) => {
  return (
    <StyledText style={[styles.title, style]} {...props}>
      {children}
    </StyledText>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    borderWidth: 1,
    padding: 8,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Comfortaa_700Bold",
    borderColor: "white",
    textAlign: Platform.select({ android: "center", ios: "center" }),
  },
});
