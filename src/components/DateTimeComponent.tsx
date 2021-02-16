import React, { FC } from 'react';
import { Text, Props as TextProps } from './Text';

export interface Props extends TextProps {
  dateTime: Date;
}

export const DateTimeComponent: FC<Props> = ({ dateTime, ...rest}) => {
  return <Text {...rest}>{dateTime.toLocaleTimeString()} {dateTime.toLocaleDateString()}</Text>;
}
