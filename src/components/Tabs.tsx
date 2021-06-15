import React from "react";
import styled from "styled-components";
import { Text } from "./Text";
import {
  ComponentProps,
  getThemeBorder,
  getThemeMargin,
  getThemePadding,
} from "../themes";
import { List } from "./List";
import { FC } from "react";

interface TabProps extends ComponentProps {
  isSelected: boolean;
}

const Tab = styled(Text)`
  ${(props: TabProps) =>
    props.isSelected ? `border-bottom: ${getThemeBorder(props, "tabs")};` : ""}
  padding: ${(props) => getThemePadding(props, "tabs")};
  margin: ${(props) => getThemeMargin(props, "tabs")};
  text-align: center;
`;

interface TabData {
  id: string;
  label: string;
}

interface Props extends ComponentProps {
  tabs: TabData[];
  selectedTabId: string;
  onTabSelected: (tabId: string) => void;
}

export const Tabs: FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
  themeColor,
}) => {
  return (
    <List mode="h" style={{ paddingBottom: "10px" }} justify="flex-start">
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
