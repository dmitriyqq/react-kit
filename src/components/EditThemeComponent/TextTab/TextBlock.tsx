import React, { FC } from "react";
import { TextStyle } from "../../../themes/theme";

interface Props {
  textStyle: TextStyle;
}

export const TextBlock: FC<Props> = ({ textStyle }) => {
  const { fontFamily, fontSize, fontWeight, textTransform } = textStyle;

  return (
    <div
      style={{
        fontFamily,
        fontSize: `${fontSize}px`,
        fontWeight,
        textTransform,
      }}
    >
      {fontFamily}({fontWeight}) {fontSize}px
    </div>
  );
};
