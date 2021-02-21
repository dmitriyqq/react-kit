import React, { FC } from "react";
import { Text, Props as TextProps } from "./Text";

export interface Props extends TextProps {
  date?: Date;
  dateTime?: Date;
  time?: Date;
}

export const DateTimeComponent: FC<Props> = ({
  date,
  time,
  dateTime,
  ...rest
}) => {
  if (dateTime) {
    return (
      <Text {...rest}>
        {dateTime.toLocaleTimeString()} {dateTime.toLocaleDateString()}
      </Text>
    );
  }

  if (date) {
    return <Text {...rest}>{date.toLocaleDateString()}</Text>;
  }

  if (time) {
    return <Text {...rest}>{time.toLocaleTimeString()}</Text>;
  }

  return <Text {...rest}>Unknown</Text>;
};
