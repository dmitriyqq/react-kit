import React from "react";
import { BoxShadowEntity } from "./BoxShadowTab";
import { getBoxShadowStyle } from "../../../themes/helpers/boxShadow";

export const BoxShadowComponent = ({
  boxShadow,
}: {
  boxShadow: BoxShadowEntity;
}) => {
  return (
    <div
      style={{
        width: "300px",
        height: "100px",
        backgroundColor: "#dddddd",
        boxShadow: getBoxShadowStyle(boxShadow),
      }}
    />
  );
};
