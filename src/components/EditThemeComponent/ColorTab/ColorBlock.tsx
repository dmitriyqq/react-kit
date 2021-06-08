import React, { FC } from "react";

interface Props {
  color: string;
}

export const ColorBlock: FC<Props> = ({ color }) => {
  return (
    <div style={{ backgroundColor: color, width: "50px", height: "50px" }} />
  );
};
