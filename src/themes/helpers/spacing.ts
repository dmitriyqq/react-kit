import { ThemeProps } from "../types";

export interface Props extends ThemeProps {
  themeSpacing?: string | null;
}

const DEFAULT_SPACING = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5,
};

export const getSpacing = ({ theme, themeSpacing }: Props) => {
  if (theme && !theme.spacings[themeSpacing ?? "single"]) {
    console.warn(`spacing ${themeSpacing} is not found in the theme`);
  }

  return theme?.spacings[themeSpacing ?? "single"] ?? DEFAULT_SPACING;
};

export const getSpacingStyle = (props: Props) => {
  if (props.themeSpacing === null) {
    return "0";
  }

  const { top, right, bottom, left } = getSpacing(props);
  return `${top}px ${right}px ${bottom}px ${left}px`;
};

export const getHalfSpacing = ({ theme }: ThemeProps) =>
  getSpacingStyle({ theme, themeSpacing: "half" });
export const getSingleSpacing = ({ theme }: ThemeProps) =>
  getSpacingStyle({ theme, themeSpacing: "single" });
export const getDoubleSpacing = ({ theme }: ThemeProps) =>
  getSpacingStyle({ theme, themeSpacing: "double" });
export const getTripleSpacing = ({ theme }: ThemeProps) =>
  getSpacingStyle({ theme, themeSpacing: "triple" });
export const getQuadSpacing = ({ theme }: ThemeProps) =>
  getSpacingStyle({ theme, themeSpacing: "quad" });
