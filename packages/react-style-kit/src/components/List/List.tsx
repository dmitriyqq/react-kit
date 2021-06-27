import styled from "styled-components";
import { getGridArea, ThemeProps } from "../../themes";

export interface Props extends ThemeProps {
  mode?: "v" | "h";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  wrapItems?: boolean;
  gridArea?: string;
}

export const List = styled.div<Props>`
  flex-wrap: ${(props) => (props.wrapItems ? "wrap" : "no-wrap")};
  display: flex;
  flex-direction: ${(props) => (props.mode === "h" ? "row" : "column")};
  align-items: ${(props) =>
    props.align ?? (props.mode === "h" ? "center" : "stretch")};
  justify-content: ${(props) => props.justify ?? "start"};
  overflow: auto;
  ${getGridArea}
`;
