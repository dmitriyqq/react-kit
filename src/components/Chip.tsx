import React, { FC, ReactChild, ReactChildren, MouseEvent } from "react";
import styled from "styled-components";
import { Text } from "./Text";
import { ColorType, getColorFromProp, ThemeProps } from "../themes/theme";
import { Icon } from "./Icon";

export interface Props {
  children: ReactChildren | ReactChild;
  color?: ColorType | string;
  id?: string;
  onClick?: () => void;
  onDelete?: (id: string) => void;
}

interface ChipContainerProps extends ThemeProps {
  color?: ColorType | string;
}

const ChipContainer = styled.div<ChipContainerProps>`
  display: inline-flex;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) =>
    getColorFromProp(props, props.color ?? "primary", "main")};
  border-radius: 25px;
  margin: ${(props) => props.theme?.spacing.slim ?? "4px"};
  padding: ${(props) => props.theme?.spacing.slim ?? "4px"}
    ${(props) => props.theme?.spacing.double ?? "15px"};
  cursor: pointer;
  line-height: 20px;
  &:hover {
    background-color: ${(props) =>
      getColorFromProp(props, props.color ?? "primary", "dark")};
  }
`;

const StyledIcon = styled(Icon)`
  margin-left: 3px;
`;

export const Chip: FC<Props> = ({ onDelete, onClick, color, id, children }) => {
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
    <ChipContainer color={color} onClick={handleClick}>
      <Text variant="label" align="center" color="white">
        {children}
      </Text>
      {onDelete && id && (
        <StyledIcon
          icon="close-circle"
          size="1x"
          color="white"
          hoverColor="grey"
          onClick={handleDeleteClick}
        />
      )}
    </ChipContainer>
  );
};
