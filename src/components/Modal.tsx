import React, { FC, ReactNode, MouseEvent, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Card } from "./Card/Card";
import { CardContent } from "./Card/CardContent";
import { CardHeader } from "./Card/CardHeader";
import {
  getMainThemeBackgroundColorShade,
  getThemeBorder,
  getThemeBoxShadow,
  getWidthUnit,
} from "../themes";

interface IModalWrapperProps {
  open: boolean;
}

export interface Props extends InputHTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export const ModalWrapper = styled.div`
  display: ${(props: IModalWrapperProps) => (props.open ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

export const ModalContentWrapper = styled(Card)`
  display: block;
  background-color: ${(props) =>
    getMainThemeBackgroundColorShade(props, "card")};
  margin: 250px auto; /* 15% from the top and centered */
  border: ${(props) => getThemeBorder(props, "card")};
  width: 80%; /* Could be more or less, depending on screen size */
  box-shadow: ${(props) => getThemeBoxShadow(props, "card")};
  max-width: ${(props) => getWidthUnit(props, "8u")};
`;

export const Modal: FC<Props> = ({
  onClose,
  open,
  title,
  children,
  ...rest
}) => {
  const handleModalClick = (event: MouseEvent) => {
    event?.stopPropagation();
  };

  return (
    <ModalWrapper {...rest} open={open} onClick={onClose}>
      <ModalContentWrapper onClick={handleModalClick}>
        <CardHeader title={title} onClose={onClose} />
        <CardContent>{children}</CardContent>
      </ModalContentWrapper>
    </ModalWrapper>
  );
};
