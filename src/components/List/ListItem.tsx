import { RoundedImage } from "../RoundedImage";
import React, { useState, FC, ReactNode } from "react";
import { Icon } from "../Icon";
import { Text } from "../Text";
import styled from "styled-components";

interface CustomAction {
  icon: string;
  id: string;
}

export interface Props {
  label?: string;
  icon?: string;
  image?: string;

  id?: string;
  children?: ReactNode;

  customActions?: CustomAction[];

  onClick?: (id?: string) => void;
  onDelete?: (id?: string) => void;
  onNav?: (id?: string) => void;
  onAction?: (action: string, id?: string) => void;
}

interface ImageWithIconFallbackProps {
  image?: string;
  icon?: string;
}

const ImageWithIconFallback: FC<ImageWithIconFallbackProps> = ({
  image,
  icon,
}) => {
  const [imageSrc, setImageSrc] = useState(image || "");

  if (imageSrc) {
    return <RoundedImage src={imageSrc} onError={() => setImageSrc("")} />;
  }

  if (icon) {
    return <Icon icon={icon} size="3x" />;
  }

  return null;
};

const ListItemBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.slim}
    ${(props) => props.theme.spacing.double};
`;

const IconContainer = styled.div`
  max-width: 64px;
  max-height: 64px;
  min-width: 64px;
  min-height: 64px;
  border-radius: 100%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  line-height: 64px;
  object-fit: contain;
  background-color: ${(props) => props.theme.colors.secondaryBackground};
  text-align: center;
`;

const ActionContainer = styled.div``;

const TextContainer = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.spacing.slim}
    ${(props) => props.theme.spacing.double};
`;

const ContentContainer = styled.div`
  flex: 1.4 1.4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.double};
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
      onClick={() => handleCustomAction(action.id)}
    />
  ));

  return (
    <ListItemBase onClick={() => onClick && onClick(id)}>
      {(icon || image) && (
        <IconContainer>
          <ImageWithIconFallback icon={icon} image={image} />
        </IconContainer>
      )}
      <MainContainer>
        {label && (
          <TextContainer>
            <Text variant="label" align={"left"}>
              {label}
              {children && ":"}
            </Text>
          </TextContainer>
        )}
        {children && <ContentContainer>{children}</ContentContainer>}
      </MainContainer>
      <ActionContainer>
        {onDelete && <Icon icon="close" onClick={() => onDelete(id)} />}
        {onNav && <Icon icon="arrow-right-s" onClick={() => onNav(id)} />}
        {customActionsElements}
      </ActionContainer>
    </ListItemBase>
  );
};
