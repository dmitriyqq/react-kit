import React, { FC, ReactChild, ReactChildren } from 'react'
import styled from 'styled-components'
import { ColorType, Theme } from '../themes/theme'
import { Text } from './Text'

export interface Props {
  onClick?: () => void
  className?: string
  disabled?: boolean
  children: ReactChildren | ReactChild
  color?: ColorType
  theme?: Theme
}

export const Button: FC<Props> = ({
  onClick,
  children,
  className,
  color,
  disabled
}) => (
  <StyledButton
    className={className}
    onClick={onClick}
    disabled={disabled === true}
    color={color}
  >
    <Text variant='button'>{children}</Text>
  </StyledButton>
)

const StyledButton = styled.button`
  min-width: 160px;
  height: 40px;
  border: none;
  margin: ${(props: Props) => props.theme?.spacing.single ?? '8px'};
  padding: 0 ${(props: Props) => props.theme?.spacing.double ?? '8px'};
  box-sizing: border-box;
  background-color: ${(props: Props) =>
    props.theme?.colors[props.color ?? 'primary'].main ?? '#777777'};
  line-height: 40px;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: ${(props: Props) =>
      props.theme?.colors[props.color ?? 'primary'].light ?? '#777777'};
  }
  &:active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    background-color: ${(props: Props) =>
      props.theme?.colors[props.color ?? 'primary'].dark ?? '#777777'};
  }
  &:focus {
    outline: 0;
  }
`
