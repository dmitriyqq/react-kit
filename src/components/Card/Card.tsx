import styled from "styled-components";
import { getBoxShadow, getGridArea, ThemeProps } from "../../themes/theme";
import { ReactNode } from "react";
import { getBorderRadius } from "../../themes/helpers/border";
import { getSingleSpacing } from "../../themes/helpers/spacing";

export interface Props extends ThemeProps {
  canSelect?: boolean;
  children?: ReactNode;
  gridArea?: string;
}

export const Card = styled.div<Props>`
  display: inline-block;
  box-sizing: border-box;
  box-shadow: ${(props) => getBoxShadow(props).light};
  border-radius: ${getBorderRadius};
  margin: ${getSingleSpacing};
  cursor: ${(props: Props) => (props.canSelect ? "pointer" : "default")};
  overflow: auto;
  ${(props: Props) =>
    props.canSelect
      ? `&:hover {
          box-shadow: ${getBoxShadow(props).dark};
      }`
      : ""}
  ${getGridArea}
`;
