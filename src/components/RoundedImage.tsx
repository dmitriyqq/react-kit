import styled from "styled-components";
import { ComponentProps, getWidthUnit } from "../themes";

export interface Props extends ComponentProps {
  src: string;
}

export const RoundedImage = styled.img<Props>`
  max-width: ${(props) => getWidthUnit(props, "0.5u")};
  max-height: ${(props) => getWidthUnit(props, "0.5u")};
  min-width: ${(props) => getWidthUnit(props, "0.5u")};
  min-height: ${(props) => getWidthUnit(props, "0.5u")};
  border-radius: 100%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  object-fit: contain;
`;
