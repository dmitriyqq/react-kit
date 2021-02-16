import React from 'react';
import { Text } from './Text';

export interface Props {
  num: number;
  rounding?: number;
  isInteger?: boolean;
}

export const NumberComponent: React.FC<Props> = ({num, rounding, isInteger}) =>
  (<Text>{isInteger ? num.toFixed(0) : Number(num.toFixed(rounding ?? 2)).toLocaleString() }</Text>)
