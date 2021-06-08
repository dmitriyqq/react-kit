import React from "react";
import styled from "styled-components";
import { Text } from "./Text";
import { getMainColorShade } from "../themes/helpers/color";
import { List } from "./List";
import { FC } from "react";
import { ColorType, ThemeProps } from "../themes/theme";

interface TabProps extends ThemeProps {
  isSelected: boolean;
  themeColor?: ColorType;
}

const Tab = styled(Text)`
  ${(props: TabProps) =>
    props.isSelected
      ? `border-bottom: 3px solid ${getMainColorShade(props)};`
      : ""}
  padding: 6px;
  margin: 4px;
  text-align: center;
`;

interface TabData {
  id: string;
  label: string;
}

interface Props {
  tabs: TabData[];
  selectedTabId: string;
  onTabSelected: (tabId: string) => void;
  themeColor?: ColorType;
}

export const Tabs: FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
  themeColor,
}) => {
  return (
    <List mode="h" style={{ paddingBottom: "10px" }}>
      {tabs.map(({ id, label }) => (
        <Tab
          key={id}
          onClick={() => onTabSelected(id)}
          isSelected={id === selectedTabId}
          themeColor={themeColor}
        >
          {label}
        </Tab>
      ))}
    </List>
  );
};
