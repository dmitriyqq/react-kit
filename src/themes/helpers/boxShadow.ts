import { BoxShadow } from "../theme";

export const getBoxShadowStyle = (boxShadow?: BoxShadow) => {
  if (!boxShadow) {
    return "none";
  }

  return `${boxShadow.hOffset}px ${boxShadow.vOffset}px ${boxShadow.blur}px ${boxShadow.spread}px grey`;
};
