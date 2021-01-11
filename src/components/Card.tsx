import styled from 'styled-components'
import { getBorderRadius, getBoxShadow, ThemeProps } from '../themes/theme'

export interface Props extends ThemeProps {
  canSelect?: boolean
}

export const Card = styled.div<Props>`
    box-shadow: ${props => getBoxShadow(props).light};
    transition: 0.3s;
    border-radius: ${getBorderRadius};
    cursor: ${(props: Props) => props.canSelect ? 'pointer' : 'default'};
    padding: ${getBorderRadius} 0;
    ${
      (props: Props) => props.canSelect ?
        `&:hover {
            box-shadow: ${getBoxShadow(props).dark};
        }` : ''
    }
    // &:hover {
    //   box-shadow: ${props => getBoxShadow(props).dark};
    // }
`

// export const CardContent