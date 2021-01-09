import { ColorType, TextType, Theme } from '../themes/theme';
import { ReactChild, ReactChildren } from 'react';
export interface Props {
    variant?: TextType;
    color?: ColorType;
    theme?: Theme;
    children?: ReactChildren | ReactChild;
}
export declare const Text: import("styled-components").StyledComponent<"div", any, Props, never>;
