import React, { FC } from 'react';
import { Text, Props as TextProps } from './Text';

export interface Props extends TextProps {
  time: Date;
}

export const TimeComponent: FC<Props> = ({ time, ...rest}) => {
  return <Text {...rest}>{time.toLocaleTimeString()}</Text>;
}
