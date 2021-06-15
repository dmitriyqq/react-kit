import styled from "styled-components";
import {
  ComponentProps,
  getThemeBorder,
  getWidthUnit,
  ThemeProps,
} from "../themes";

export const Loader = styled.div<ComponentProps>`
  border: 8px solid ${(props) => getThemeBorder(props, "loader")};
  border-radius: 50%;
  width: ${(props) => getWidthUnit(props, "1u")};
  height: ${(props: ThemeProps) => getWidthUnit(props, "1u")};
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
