import styled from 'styled-components'
import { FC, ReactNode, MouseEvent } from 'react'
import { ColorType, TextColorType, TextType, ThemeProps } from '../themes/theme'
import { getFontColor, getFontFamily, getFontSize, getFontWeight, getTextAlign, getTextTransform } from './Text'
import React from 'react'

interface InnerLinkProps {
  children: ReactNode
  variant?: TextType
  align?: 'left' | 'right' | 'center' | 'justify'
  color: TextColorType
}

const InnerLink = styled.a<InnerLinkProps>`
  width: 100%;      
  font-family: ${getFontFamily};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  text-align: ${getTextAlign};
  cursor: pointer;
  &:hover {
    color: ${props => props.color && props.color === 'text' ? props.theme.colors.primary.main : props.theme.colors[props.color].dark }
  }
`

export interface Props extends ThemeProps {
  to: string;
  children: ReactNode
  variant?: TextType
  align?: 'left' | 'right' | 'center' | 'justify'
  onNavigate: (value: string) => void
  color: TextColorType
}

export const Link: FC<Props> = ({ theme, onNavigate, color, variant, align, to, children }) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(to)
  }

  return <InnerLink theme={theme} color={color} variant={variant} align={align} onClick={handleClick}>{children}</InnerLink>
}