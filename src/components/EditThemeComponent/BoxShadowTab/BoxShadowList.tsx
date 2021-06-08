import React from "react";
import { BoxShadow } from "../../../themes/theme";
import { FC } from "react";
import { List } from "../../List";

interface Props {
  boxShadows: { name: string; BoxShadow: BoxShadow };
}

export const BoxShadowList: FC<Props> = ({ boxShadows }) => {
  return <List>{boxShadows}</List>;
};
