import React, { FC, PropsWithChildren } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

const StyledButton: FC<PropsWithChildren<PressableProps>> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        ...(typeof style === "object" && style),
        opacity: pressed ? 0.75 : 1,
      })}
      android_ripple={{ color: "#72063c" }}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#72063c",
    borderRadius: 10,
    padding: 6,
    alignItems: "center",
    color: "white",
  },
});
