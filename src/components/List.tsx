import styled from 'styled-components'
import { ThemeProps } from '../themes/theme'

interface Props extends ThemeProps {
  mode?: 'v' | 'h'
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
}

export const List = styled.div<Props>`

  display: flex;
  flex-direction: ${props => props.mode === 'h' ? 'row' : 'column'};
  align-items: ${props => props.align ?? props.mode === 'h' ? 'center' : 'stretch'};
  justify-content: ${props => props.justify ?? 'start'};
`