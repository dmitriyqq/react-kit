import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { ColorType, getBorderRadius, getBoxShadow, ThemeProps } from '../themes/theme'
import { Text } from './Text'

const ButtonText = styled(Text)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export interface Props extends ThemeProps {
  onClick?: () => void
  className?: string
  disabled?: boolean
  children?: ReactNode
  color?: ColorType
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
    <ButtonText variant='button' align='center'>{children}</ButtonText>
  </StyledButton>
)

const StyledButton = styled.button<Props>`
  min-width: 160px;
  height: 40px;
  border: none;
  margin: ${(props: Props) => props.theme?.spacing.single ?? '8px'};
  padding: 0 ${(props: Props) => props.theme?.spacing.double ?? '8px'};
  box-sizing: border-box;
  background-color: ${(props) => props.theme?.colors[props.color ?? 'primary'].main ?? 'black'};
  line-height: 40px;
  cursor: pointer;
  box-shadow: ${(props: Props) => getBoxShadow(props).light};
  border-radius: ${getBorderRadius};
  &:hover {
    box-shadow: ${(props: Props) => getBoxShadow(props).main};
    background-color: ${(props: Props) =>
      props.theme?.colors[props.color ?? 'primary'].light ?? 'black'};
  }
  &:active {
    box-shadow: ${(props) => getBoxShadow(props).main};
    background-color: ${(props: Props) =>
      props.theme?.colors[props.color ?? 'primary'].dark ?? 'black'};
  }
  &:focus {
    outline: 0;
  }
`
