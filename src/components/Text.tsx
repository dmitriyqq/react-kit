import styled from 'styled-components'
import { TextColorType, TextType, ThemeProps } from '../themes/theme'

export interface Props extends ThemeProps {
  variant?: TextType
  color?: TextColorType | string
  align?: 'left' | 'right' | 'center' | 'justify'
}

export const getFontFamily = (props: Props) => props.theme?.text[props.variant ?? 'regular'].fontFamily ?? 'sans-serif'
export const getFontSize = (props: Props) =>
  props.theme?.text[props.variant ?? 'regular'].fontSize ?? '1em'
export const getFontWeight = (props: Props) =>
  props.theme?.text[props.variant ?? 'regular'].fontWeight ?? '500';
export const getFontColor = (props: Props) =>
  props.color === 'text' ?
    props.theme?.text[props.variant ?? 'regular'].color ?? 'black' :
    props.color ?? props.theme?.text[props.variant ?? 'regular'].color ?? 'black'
export const getTextTransform = (props: Props) => props.theme?.text[props.variant ?? 'regular'].textTransform ?? 'none';
export const getTextAlign = (props: Props) => props.align ?? 'left';

export const Text = styled.div<Props>`
  width: 100%;      
  font-family: ${getFontFamily};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  text-align: ${getTextAlign};
`

export const SpanText = styled.span<Props>`
  width: 100%;      
  font-family: ${getFontFamily};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  text-align: ${getTextAlign};
`