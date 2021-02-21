import styled from "styled-components";
import { FC, ReactNode } from "react";
import React from "react";
import { Text } from "./Text";
import { Icon } from "./Icon";
import { ThemeProps } from "../themes/theme";

const FormItemBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing.double};
  flex-wrap: wrap;
`;

const LabelContainer = styled.div`
  flex: 1 1;
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing.double};
`;

const FieldContainer = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing.double};
`;

export interface Props extends ThemeProps {
  label: string;
  children: ReactNode;
  icon?: string;
}

export interface FormFieldProps extends ThemeProps {
  label: string;
  name: string;
}

export const FormField: FC<Props> = ({ label, icon, children, theme }) => {
  return (
    <FormItemBase>
      {icon && <Icon icon={icon} theme={theme} />}
      <LabelContainer>
        <Text>{label}</Text>
      </LabelContainer>
      <FieldContainer>{children}</FieldContainer>
    </FormItemBase>
  );
};
