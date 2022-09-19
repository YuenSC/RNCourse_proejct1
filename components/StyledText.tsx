import React, { FC, PropsWithChildren } from "react";
import { Text, TextProps } from "react-native";

const StyledText: FC<PropsWithChildren<TextProps>> = ({
  style,
  children,
  ...textProps
}) => {
  return (
    <Text
      {...textProps}
      style={{
        fontFamily: "Comfortaa_400Regular",
        ...(typeof style === "object" && style),
      }}
    >
      {children}
    </Text>
  );
};

export default StyledText;
