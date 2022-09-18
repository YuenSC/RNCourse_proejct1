import React, { FC, PropsWithChildren } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

const Title: FC<PropsWithChildren<TextProps>> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text
      style={{ ...styles.title, ...(typeof style === "object" && style) }}
      {...props}
    >
      {children}
    </Text>
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
    borderColor: "white",
  },
});
