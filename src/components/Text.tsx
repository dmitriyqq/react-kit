import styled from 'styled-components'
import { TextColorType, TextType, Theme } from '../themes/theme'
import { ReactChild, ReactChildren } from 'react'

export interface Props {
  variant?: TextType
  color?: TextColorType
  theme?: Theme
  children?: ReactChildren | ReactChild
}

export const Text = styled.div`
  font-family: ${(props: Props) =>
    props.theme?.text[props.variant ?? 'regular'].fontFamily ?? 'sans-serif'};
  font-size: ${(props: Props) =>
    props.theme?.text[props.variant ?? 'regular'].fontSize ?? '1em'};
  font-weight: ${(props: Props) =>
    props.theme?.text[props.variant ?? 'regular'].fontWeight ?? '500'};
  color: ${(props: Props) =>
          props.color === 'text' ? props.theme?.text[props.variant ?? 'regular'].color ?? 'black' :
          props.color ??
          props.theme?.text[props.variant ?? 'regular'].color ?? 'black' };
  text-transform: ${(props: Props) =>
    props.theme?.text[props.variant ?? 'regular'].textTransform ?? 'none'};
`
