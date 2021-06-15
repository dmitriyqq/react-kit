import styled from "styled-components";
import {
  getGridArea,
  getThemeBorderRadius,
  getThemeMargin,
  ComponentProps,
  getThemeBoxShadow,
} from "../../themes";
import { ReactNode } from "react";

export interface Props extends ComponentProps {
  canSelect?: boolean;
  children?: ReactNode;
  gridArea?: string;
}

export const Card = styled.div<Props>`
  box-sizing: border-box;
  box-shadow: ${(props) => getThemeBoxShadow(props, "card")};
  border-radius: ${getThemeBorderRadius};
  margin: ${getThemeMargin};
  cursor: ${(props: Props) => (props.canSelect ? "pointer" : "default")};
  overflow: hidden;
  ${(props: Props) =>
    props.canSelect
      ? `&:hover {
          box-shadow: ${getThemeBoxShadow(props, "selectedCard")};
      }`
      : ""}
  ${getGridArea}
`;
