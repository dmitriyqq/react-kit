import styled from "styled-components";
import { ThemeProps } from "../themes/theme";

export const Loader = styled.div<ThemeProps>`
  border: 8px solid ${(props: ThemeProps) => props.theme.secondaryBackground}; /* Light grey */
  border-top: 8px solid
    ${(props: ThemeProps) => props.theme.colors.primary.main};
  border-radius: 50%;
  width: ${(props: ThemeProps) => `${props.theme.widthUnit / 2}px`};
  height: ${(props: ThemeProps) => `${props.theme.widthUnit / 2}px`};
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
