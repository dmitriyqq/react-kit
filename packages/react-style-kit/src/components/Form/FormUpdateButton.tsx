import { FormField } from "./FormField";
import { Button } from "../Button";
import React, { FC } from "react";

interface Props {
  updateText?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const FormUpdateButton: FC<Props> = ({
  updateText,
  disabled,
  onClick,
}) => (
  <FormField label="">
    <Button disabled={disabled} onClick={onClick}>
      {updateText || "Update"}
    </Button>
  </FormField>
);
