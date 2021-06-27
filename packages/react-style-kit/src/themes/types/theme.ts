import { Size } from "./Size";
import { Spacing } from "./Spacing";
import { BoxShadow } from "./BoxShadow";
import { Color } from "./Color";
import { Border } from "./Border";
import { TextStyle } from "./TextStyle";
import { Variant } from "./Variant";

export interface ThemeProps {
  theme?: Theme;
}

export interface Theme {
  name: string;
  spacings: {
    half: Spacing;
    single: Spacing;
    double: Spacing;
    triple: Spacing;
    quad: Spacing;
    [key: string]: Spacing;
  };
  size: Size;
  boxShadows: {
    "1": BoxShadow;
    "2": BoxShadow;
    "4": BoxShadow;
    "8": BoxShadow;
    "16": BoxShadow;
    [key: string]: BoxShadow;
  };
  colors: {
    primary: Color;
    secondary: Color;
    danger: Color;
    warning: Color;
    success: Color;
    white: Color;
    grey: Color;
    black: Color;
    disabled: Color;
    mainBackground: Color;
    secondaryBackground: Color;
    text: Color;
    [key: string]: Color;
  };
  borders: {
    primary: Border;
    secondary: Border;
    [key: string]: Border;
  };
  textStyles: {
    header: TextStyle;
    highlight: TextStyle;
    regular: TextStyle;
    button: TextStyle;
    label: TextStyle;
    sublabel: TextStyle;
    [key: string]: TextStyle;
  };
  variants: {
    primaryButton: Variant;
    secondaryButton: Variant;
    dangerButton: Variant;
    warningButton: Variant;
    successButton: Variant;
    regularText: Variant;
    highlightText: Variant;
    labelText: Variant;
    sublabelText: Variant;
    headerText: Variant;
    buttonText: Variant;
    card: Variant;
    icon: Variant;
    input: Variant;
    select: Variant;
    tabs: Variant;
    chip: Variant;
    listItem: Variant;
    range: Variant;
    rangeThumb: Variant;
    rangeTrack: Variant;
    [key: string]: Variant;
  };
}

export const getGridArea = (props: { gridArea?: string }) =>
  props.gridArea ? `grid-area: ${props.gridArea};` : "";
