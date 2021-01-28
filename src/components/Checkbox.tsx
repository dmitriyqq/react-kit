import React, { ChangeEvent, FC} from 'react'
import styled from 'styled-components'
import { getBorderRadius, getPrimaryMainColor, ThemeProps } from '../themes/theme'
import { getFontFamily } from './Text'

const InternalCheckbox = styled.input`
  position: absolute;
  opacity: 0;
`

const StyledCheckboxLabel = styled.label<LabelProps>`
  display: inline-block;
  border: 1px solid ${getPrimaryMainColor};
  border-radius: 8px;
  //padding: ${(props: ThemeProps) => props.theme?.spacing.single ?? '5px'};
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  text-align: center;
  background-color: ${(props: LabelProps) => props.value ? getPrimaryMainColor(props) : 'transparent' };
  &::after {
    font-family: 'monospace';
    content: ${(props: LabelProps) => props.value ? `'✓'` : `'✖'` };
    line-height: 1.5em;
    color: ${(props: LabelProps) => props.value ? `white` : getPrimaryMainColor(props) };
    position: relative;
    top: 0;
    bottom: 0;
  }
`

interface LabelProps extends ThemeProps {
  value: boolean
}

export interface Props extends ThemeProps {
  onChange: (value: boolean) => void
  value: boolean
}

export const Checkbox: FC<Props> = (props) => {
  const { onChange, value, theme } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  }

  return (
    <StyledCheckboxLabel theme={theme} value={value}>
      <InternalCheckbox type='checkbox' onChange={handleChange} checked={value}/>
    </StyledCheckboxLabel>
  )
}