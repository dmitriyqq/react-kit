import { RoundedImage } from "../RoundedImage";
import React, { useState, FC, ReactNode, MouseEvent, ChangeEvent } from "react";
import { Icon } from "../Icon";
import { Text } from "../Text";
import styled from "styled-components";
import { List } from "./List";
import { Chip } from "../Chip";
import { CustomAction, TagType } from "../../model";
import {
  ComponentProps,
  getHeightUnit,
  getMainThemeTextColorShade,
  getThemePadding,
  getWidthUnit,
} from "../../themes";

export interface Props {
  label?: string;
  icon?: string;
  image?: string;

  id?: string;
  children?: ReactNode;
  selected?: boolean | undefined;

  customActions?: CustomAction[];
  tags?: TagType[];

  onTagClick?: (id?: string) => void;
  onClick?: (id?: string) => void;
  onDelete?: (id?: string) => void;
  onNav?: (id?: string) => void;
  onAction?: (action: string, id?: string) => void;
  onSelect?: (value: boolean, id?: string) => void;
}

interface ImageWithIconFallbackProps extends ComponentProps {
  image?: string;
  icon?: string;
}

const ImageWithIconFallback: FC<ImageWithIconFallbackProps> = ({
  image,
  icon,
  themeColor,
}) => {
  const [imageSrc, setImageSrc] = useState(image || "");

  if (imageSrc) {
    return <RoundedImage src={imageSrc} onError={() => setImageSrc("")} />;
  }

  if (icon) {
    return <Icon icon={icon} themeColor={themeColor} size="3x" />;
  }

  return null;
};

const ListItemWrapper = styled.div`
  padding: ${(props) => getThemePadding(props, "listItem")};
  display: flex;
  flex-direction: column;
  ${(props) => (props.onClick ? "cursor: pointer;" : "")}
`;

const ListItemBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.div`
  max-width: ${(props) => getWidthUnit(props, "0.5u")};
  max-height: ${(props) => getWidthUnit(props, "0.5u")};
  min-width: ${(props) => getWidthUnit(props, "0.5u")};
  min-height: ${(props) => getWidthUnit(props, "0.5u")};
  border-radius: 100%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  line-height: ${(props) => getWidthUnit(props, "0.5u")};
  object-fit: contain;
  text-align: center;
`;

const CheckboxContainer = styled.div`
  max-width: ${(props) => getHeightUnit(props, "1u")};
  max-height: ${(props) => getHeightUnit(props, "1u")};
  min-width: ${(props) => getHeightUnit(props, "1u")};
  min-height: ${(props) => getHeightUnit(props, "1u")};
  display: inline-block;
  vertical-align: middle;
  line-height: ${(props) => getHeightUnit(props, "1u")};
  object-fit: contain;
  text-align: center;
`;

const TextContainer = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => getThemePadding(props, "text")};
`;

const ContentContainer = styled.div`
  flex: 1.4 1.4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${(props) => getThemePadding(props, "text")};
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ListItem: FC<Props> = (props) => {
  const {
    label,
    onClick,
    icon,
    image,
    onDelete,
    onNav,
    id,
    children,
    customActions,
    onAction,
    tags,
    onTagClick,
    onSelect,
    selected,
  } = props;

  const handleCustomAction = (actionId: string) => {
    if (onAction) {
      onAction(actionId, id);
    }
  };

  const customActionsElements = (customActions ?? []).map((action) => (
    <Icon
      key={action.id}
      icon={action.icon}
      onClick={(event) => {
        event.stopPropagation();
        handleCustomAction(action.id);
      }}
    />
  ));

  const handleTagClick = (id: string) => {
    if (onTagClick) {
      onTagClick(id);
    }
  };

  const tagsItems = (tags ?? [])?.map((tag) => (
    <Chip
      key={tag.id}
      onClick={onTagClick ? () => handleTagClick(tag.id) : undefined}
      themeColor={tag.color}
    >
      {tag.label}
    </Chip>
  ));

  const handleDelete = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if (onDelete && id) {
      onDelete(id);
    }
  };

  const handleNav = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    if (onNav && id) {
      onNav(id);
    }
  };

  const handleSelectedClick = (event: ChangeEvent<{}>) => {
    if (onSelect) {
      onSelect(!selected, id);
    }
    event.stopPropagation();
  };

  return (
    <ListItemWrapper onClick={() => onClick && onClick(id)}>
      <ListItemBase>
        {selected !== undefined && (
          <CheckboxContainer>
            <Icon
              icon={selected ? "checkbox" : "checkbox-blank"}
              type="line"
              onClick={handleSelectedClick}
            />
          </CheckboxContainer>
        )}
        {(icon || image) && (
          <IconContainer>
            <ImageWithIconFallback icon={icon} image={image} />
          </IconContainer>
        )}
        <MainContainer>
          {label && (
            <TextContainer>
              <Text
                variant="labelText"
                align="left"
                color={selected ? "primary" : "text"}
              >
                {label}
                {children && ":"}
              </Text>
            </TextContainer>
          )}
          {children && <ContentContainer>{children}</ContentContainer>}
        </MainContainer>
        <List
          style={{ minWidth: "120px" }}
          mode="h"
          align="center"
          justify="center"
          wrapItems={true}
        >
          {onDelete && <Icon icon="close" onClick={handleDelete} />}
          {onNav && <Icon icon="arrow-right-s" onClick={handleNav} />}
          {customActionsElements}
        </List>
      </ListItemBase>
      {tagsItems && (
        <List mode="h" justify="flex-start">
          {tagsItems}
        </List>
      )}
    </ListItemWrapper>
  );
};
