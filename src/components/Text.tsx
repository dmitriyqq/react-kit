import styled from 'styled-components'
import { ColorType, TextColorType, TextType, ThemeProps } from '../themes/theme'

export interface Props extends ThemeProps {
  variant?: TextType
  color?: TextColorType | ColorType | string
  align?: 'left' | 'right' | 'center' | 'justify'
  children?: any
}

export const getFontFamily = (props: Props) => props.theme?.text[props.variant ?? 'regular'].fontFamily ?? 'sans-serif'
export const getFontSize = (props: Props) =>
  props.theme?.text[props.variant ?? 'regular'].fontSize ?? '1em'
export const getFontWeight = (props: Props) =>
  props.theme?.text[props.variant ?? 'regular'].fontWeight ?? '500';
export const getFontColor = (props: Props) =>
  !props.color || props.color === 'text' ? props.theme?.text[props.variant ?? 'regular'].color
    : props.theme.colors[props.color as ColorType] ? props.theme.colors[props.color as ColorType].main : props.color
export const getTextTransform = (props: Props) => props.theme?.text[props.variant ?? 'regular'].textTransform ?? 'none';
export const getTextAlign = (props: Props) => props.align ?? 'left';

export const Text = styled.div<Props>`
  font-family: ${getFontFamily};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  text-align: ${getTextAlign};
  display: inline-block;
`

export const SpanText = styled.span<Props>`
  width: 100%;
  font-family: ${getFontFamily};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  text-align: ${getTextAlign};
`
