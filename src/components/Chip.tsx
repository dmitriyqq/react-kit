import React, { FC, ReactChild, ReactChildren } from 'react'
import styled from 'styled-components'
import { Props as TypographyProps, Text } from './Text'

export interface Props extends TypographyProps {
  children: ReactChildren | ReactChild
}

const ChipContainer = styled.div`
  display: inline-block;
  background-color: ${(props: Props) => props.theme?.colors[ props.color ?? 'primary' ]?.main ?? 'red' };
  border-radius: 25px;
  margin: ${(props: Props) => props.theme?.spacing.slim ?? '4px'};
  padding: ${(props: Props) => props.theme?.spacing.slim ?? '4px'} ${(props: Props) => props.theme?.spacing.double ?? '15px'};
  cursor: pointer;

  &:hover {
    background-color: ${(props: Props) => props.theme?.colors[ props.color ?? 'primary' ]?.dark ?? 'red' };  
  }
`

export const Chip: FC = (props) => {
  return <ChipContainer {...props}>
    <Text {...props} variant='label' align='center' color='white'>
      {props.children}
    </Text>
  </ChipContainer>
}