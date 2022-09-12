import React, { FC, PropsWithChildren } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const StyledButton: FC<PropsWithChildren<TouchableOpacityProps>> = ({
  children,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...(typeof style === "object" && style) }}
      activeOpacity={0.8}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default StyledButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 10,
    padding: 6,
    alignItems: "center",
    color: "white",
  },
});
