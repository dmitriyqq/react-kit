import styled from "styled-components";
import { getThemePadding } from "../../themes";

export const CardContent = styled.div`
  padding: ${(props) => getThemePadding(props, "card")};
  overflow: auto;
  box-sizing: border-box;
`;
