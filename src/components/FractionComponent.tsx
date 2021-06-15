import { SpanText, Text, Props as TextProps } from "./Text";
import React, { FC } from "react";

export interface Props extends TextProps {
  numerator: number;
  denominator: number;
}

export const FractionComponent: FC<Props> = ({
  numerator,
  denominator,
  ...rest
}) => {
  return (
    <Text variant="regularText" {...rest}>
      <SpanText variant="regularText" themeColor="primary">
        {numerator}
      </SpanText>
      /{denominator}
    </Text>
  );
};
