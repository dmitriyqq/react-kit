import styled from "styled-components";
import {
  getGridArea,
  getThemeBorderRadius,
  getThemeMargin,
  ComponentProps,
  getThemeBoxShadow,
} from "../../themes";
import { ReactNode } from "react";
import { getBoxShadow4 } from "../../themes/helpers/boxShadow";

export interface Props extends ComponentProps {
  canSelect?: boolean;
  children?: ReactNode;
  gridArea?: string;
}

export const Card = styled.div<Props>`
  box-sizing: border-box;
  box-shadow: ${(props) => getThemeBoxShadow(props, "card")};
  border-radius: ${(props) => getThemeBorderRadius(props, "card")};
  margin: ${(props) => getThemeMargin(props, "card")};
  cursor: ${(props: Props) => (props.canSelect ? "pointer" : "default")};
  overflow: auto;
  ${(props: Props) =>
    props.canSelect
      ? `&:hover {
          box-shadow: ${getBoxShadow4(props)};
      }`
      : ""}
  ${getGridArea}
`;
