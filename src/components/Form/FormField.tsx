import styled from "styled-components";
import { FC, ReactNode } from "react";
import React from "react";
import { Text } from "../Text";
import { Icon } from "../Icon";

const FormItemBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.double};
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
  padding: ${(props) => props.theme.spacing.double};
`;

const FieldContainer = styled.div`
  flex: 1 1;
  display: flex;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.double};
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
        <Text variant="label">{label ? `${label}:` : ""}</Text>
      </LabelContainer>
      <FieldContainer>{children}</FieldContainer>
    </FormItemBase>
  );

  return (
    <FormItemWrapper>
      {errorMessage && (
        <Text variant="label" align="center" color="red">
          {errorMessage}
        </Text>
      )}
      {field}
    </FormItemWrapper>
  );
};
