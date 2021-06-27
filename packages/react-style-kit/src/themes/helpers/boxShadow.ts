import { ThemeProps } from "../types";

export interface Props extends ThemeProps {
  themeBoxShadow?: string | null;
}

export const DEFAULT_BOX_SHADOW = {
  hOffset: 4,
  vOffset: 4,
  blur: 5,
  spread: 4,
};

export const getBoxShadow = ({ theme, themeBoxShadow }: Props) => {
  if (theme && !theme?.boxShadows[themeBoxShadow ?? 1]) {
    console.warn(`box shadow ${themeBoxShadow} is not found in the theme`);
  }

  return theme?.boxShadows[themeBoxShadow ?? "2"] ?? DEFAULT_BOX_SHADOW;
};

export const getBoxShadowStyle = (props: Props) => {
  if (props.themeBoxShadow === null) {
    return "none";
  }

  const boxShadow = getBoxShadow(props);

  return `${boxShadow.hOffset}px ${boxShadow.vOffset}px ${boxShadow.blur}px ${boxShadow.spread}px grey`;
};

const getBoxShadowN = (themeBoxShadow: string) => (props: ThemeProps) =>
  getBoxShadowStyle({ theme: props.theme, themeBoxShadow });

export const getBoxShadow1 = getBoxShadowN("1");
export const getBoxShadow2 = getBoxShadowN("2");
export const getBoxShadow4 = getBoxShadowN("4");
export const getBoxShadow8 = getBoxShadowN("8");
export const getBoxShadow16 = getBoxShadowN("16");
