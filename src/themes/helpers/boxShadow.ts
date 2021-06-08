import { BoxShadow } from "../theme";

export const getBoxShadowStyle = (boxShadow?: BoxShadow) => {
  if (!boxShadow) {
    return "none";
  }

  return `${boxShadow.hOffset} ${boxShadow.vOffset} ${boxShadow.blur} ${boxShadow.spread} grey`;
};
