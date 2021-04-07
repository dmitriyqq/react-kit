import React, { FC, ReactChild, ReactChildren } from "react";
import styled from "styled-components";
import { Props as TypographyProps, Text } from "./Text";
import {
  getPrimaryColor,
  getPrimaryMainColor,
  ThemeProps,
} from "../themes/theme";

export interface Props extends TypographyProps {
  children: ReactChildren | ReactChild;
  onClick: () => void;
}

interface ChipInternalProps extends Props, ThemeProps {}

const ChipContainer = styled.div`
  display: inline-block;
  background-color: ${getPrimaryMainColor};
  border-radius: 25px;
  margin: ${(props: ChipInternalProps) => props.theme?.spacing.slim ?? "4px"};
  padding: ${(props: ChipInternalProps) => props.theme?.spacing.slim ?? "4px"}
    ${(props: ChipInternalProps) => props.theme?.spacing.double ?? "15px"};
  cursor: pointer;

  &:hover {
    background-color: ${(props: ChipInternalProps) =>
      getPrimaryColor(props).dark};
  }
`;

export const Chip: FC<Props> = (props) => {
  return (
    <ChipContainer {...props} onClick={props.onClick}>
      <Text variant="label" align="center" color="white">
        {props.children}
      </Text>
    </ChipContainer>
  );
};
