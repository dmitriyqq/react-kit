import React, { FC, ReactChild, ReactChildren, MouseEvent } from "react";
import styled from "styled-components";
import { Text } from "./Text";
import {
  ComponentProps,
  getDarkThemeBackgroundColorShade,
  getHeightUnit,
  getMainThemeBackgroundColorShade,
  getThemeBorderRadius,
  getThemeMargin,
  getThemePadding,
  getWidthUnit,
} from "../themes";
import { Icon } from "./Icon";
import { getBoxShadow2, getBoxShadow4 } from "../themes/helpers/boxShadow";

export interface Props extends ComponentProps {
  children: ReactChildren | ReactChild;
  id?: string;
  onClick?: () => void;
  onDelete?: (id: string) => void;
}

const ChipContainer = styled.div<ComponentProps>`
  display: inline-flex;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) =>
    getMainThemeBackgroundColorShade(props, "chip")};
  border-radius: ${(props) => getThemeBorderRadius(props, "chip")};
  margin: ${(props) => getThemeMargin(props, "chip")};
  padding: ${(props) => getThemePadding(props, "chip")};
  cursor: pointer;
  line-height: ${(props) => getHeightUnit(props, "0.5u")};
  height: ${(props) => getHeightUnit(props, "0.5u")};
  min-width: ${(props) => getWidthUnit(props, "1u")};
  width: ${(props) => getWidthUnit(props, "auto")};
  box-shadow: ${getBoxShadow2};
  &:hover {
    background-color: ${(props) =>
      getDarkThemeBackgroundColorShade(props, "chip")};
    box-shadow: ${getBoxShadow4};
  }
`;

const StyledIcon = styled(Icon)`
  margin-left: 3px;
  line-height: ${(props) => getHeightUnit(props, "0.5u")};
`;

export const Chip: FC<Props> = ({
  onDelete,
  onClick,
  themeColor,
  id,
  children,
}) => {
  const handleDeleteClick = (event: MouseEvent<HTMLElement>) => {
    event?.stopPropagation();

    if (onDelete && id) {
      onDelete(id);
    }

    return true;
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event?.stopPropagation();

    if (onClick) {
      onClick();
    }

    return true;
  };

  return (
    <ChipContainer onClick={handleClick} themeColor={themeColor}>
      <Text
        variant="labelText"
        align="center"
        themeColor="white"
        themeWidth="100%"
      >
        {children}
      </Text>
      {onDelete && id && (
        <StyledIcon
          icon="close-circle"
          size="1x"
          themeColor="white"
          onClick={handleDeleteClick}
        />
      )}
    </ChipContainer>
  );
};
