import styled from "styled-components";
import { getDoubleSpacing } from "../../themes/helpers/spacing";

export const CardContent = styled.div`
  padding: ${getDoubleSpacing};
  overflow: auto;
  box-sizing: border-box;
`;
