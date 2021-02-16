import React, { FC } from 'react';
import { Text, Props as TextProps } from './Text';

export interface Props extends TextProps {
  date: Date;
}

export const DateComponent: FC<Props> = ({ date, ...rest}) => {
  return <Text {...rest}>{date.toLocaleDateString()}</Text>;
}
