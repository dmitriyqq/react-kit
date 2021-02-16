import { SpanText, Text} from './Text'
import React, { FC, Fragment } from 'react'

export interface Props {
  num: number
  denum: number
}

export const FractionComponent: FC<Props> = ({ num, denum }) => {
  return <Text variant='regular'><SpanText variant='regular' color='primary'>{num}</SpanText>/{denum}</Text>
}
