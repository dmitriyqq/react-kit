import styled from "styled-components";
import { FC, ReactNode } from "react";
import React from "react";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { getThemePadding } from "../../themes";

const FormItemBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${(props) => getThemePadding(props, "formField")};
  flex-wrap: wrap;
`;

const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const LabelContainer = styled.div`
  flex: 1 1;
  display: flex;
  align-items: center;
  min-width: 200px;
  padding: ${(props) => getThemePadding(props, "formField")};
`;

const FieldContainer = styled.div`
  flex: 1 1;
  display: flex;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  padding: ${(props) => getThemePadding(props, "formField")};
`;

export interface Props {
  label?: string;
  children: ReactNode;
  icon?: string;
  errorMessage?: string | null;
}

export const FormField: FC<Props> = ({
  label,
  icon,
  children,
  errorMessage,
}) => {
  const field = (
    <FormItemBase>
      {icon && <Icon icon={icon} />}
      <LabelContainer>
        <Text variant="labelText">{label ? `${label}:` : ""}</Text>
      </LabelContainer>
      <FieldContainer>{children}</FieldContainer>
    </FormItemBase>
  );

  return (
    <FormItemWrapper>
      {errorMessage && (
        <Text variant="labelText" align="center" themeColor="danger">
          {errorMessage}
        </Text>
      )}
      {field}
    </FormItemWrapper>
  );
};
