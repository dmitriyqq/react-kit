import { CSSProperties } from "react";

export type TextTransformType = CSSProperties["textTransform"];

export interface TextStyle {
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  textTransform: TextTransformType;
}

export type TextType = "header" | "highlight" | "regular" | "button" | "label";
