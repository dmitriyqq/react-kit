import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { getFontColor, getFontFamily, getFontSize, getFontWeight,
  getTextTransform, Props as TextProps } from './Text'
import {
  getBorderRadius,
  getMainBackgroundColor,
  getPrimaryMainColor, ThemeProps,
} from '../themes/theme'

export interface SelectOption {
  label: string;
  value: string;
}

export interface Props {
  options: SelectOption[]
  onChange: (value: string) => void;
  value: string;
}

interface StyledSelectProps extends TextProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const StyledSelect = styled.select<StyledSelectProps>`
  flex: 1;
  align-items: center;
  appearance: none;
  outline: none;
  background-color: ${getMainBackgroundColor};
  border: 1.5px solid ${getPrimaryMainColor};
  border-radius: ${getBorderRadius};
  padding: ${(props: ThemeProps) => props.theme?.spacing.single ?? '5px'};
  font-family: ${getFontFamily};
  font-size: ${getFontSize};
  font-weight: ${getFontWeight};
  color: ${getFontColor};
  text-transform: ${getTextTransform};
  width: ${(props: ThemeProps) => `${2 * props.theme?.widthUnit}px` ?? '5px'};
  cursor: pointer;
  &:focus {
    outline: 0;
    background-color: ${getMainBackgroundColor};
  }
  &:active {
    outline: 0;
    background-color: ${getMainBackgroundColor};
  }

  > * {
    background-color: ${getMainBackgroundColor};
  }
`

const SelectWrapper = styled.div<ThemeProps>`
  margin: ${(props: ThemeProps) => props.theme?.spacing.single ?? '5px'};
  width: ${(props: ThemeProps) => `${2 * props.theme?.widthUnit}px` ?? '150px'};
  border-radius: ${getBorderRadius};
  
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  color: white;
  &::after {
    content: '\\25BC';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.7em 1em;
    height: 100%;
    pointer-events: none;
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
    color: ${getMainBackgroundColor};
    background: ${getPrimaryMainColor};
    text-decoration: none;
  }
`

export const Select: React.FC<Props> = (props) => {
  const { options, onChange, value } = props;

  const optionsElements = options.map(({label, value}) => (<option key={value} value={value}>{label}</option>));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event?.target?.value || '');
  }

  return (
    <SelectWrapper>
      <StyledSelect onChange={handleChange} value={value} variant='label'>
        {optionsElements}
      </StyledSelect>
    </SelectWrapper>
  );
}