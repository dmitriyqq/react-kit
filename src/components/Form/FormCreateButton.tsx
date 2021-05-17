import { FormField } from "./FormField";
import { Button } from "../Button";
import React, { FC } from "react";

interface Props {
  createText?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const FormCreateButton: FC<Props> = ({
  createText,
  disabled,
  onClick,
}) => (
  <FormField label="">
    <Button disabled={disabled} onClick={onClick}>
      {createText || "Create"}
    </Button>
  </FormField>
);
