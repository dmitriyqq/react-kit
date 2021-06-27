import React from "react";
import { Text, Props as TextProps } from "./Text";

export interface Props extends TextProps {
  num: number;
  rounding?: number;
  isInteger?: boolean;
}

export const NumberComponent: React.FC<Props> = ({
  num,
  rounding,
  isInteger,
  ...rest
}) => (
  <Text {...rest}>
    {isInteger
      ? num.toFixed(0)
      : Number(num.toFixed(rounding ?? 2)).toLocaleString()}
  </Text>
);
