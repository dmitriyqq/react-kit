import React, { CSSProperties } from "react";
import { List, ListItem, TextListItem } from "../../List";
import { Theme } from "../../../themes/theme";
import { Card } from "../../Card/Card";
import { CardHeader } from "../../Card/CardHeader";
import { CardContent } from "../../Card/CardContent";
import { Form } from "../../Form";
import { FormFieldsType, FormValue } from "../../../model";

interface Props {
  size: Theme["size"];
  style?: CSSProperties;
  onSizeChange: (widthUnit: number, heightUnit: number) => void;
}

const fields: FormFieldsType<Theme["size"]> = [
  {
    name: "widthUnit",
    label: "Ширина",
    type: "range",
    min: 64,
    max: 300,
    step: 1,
  },
  {
    name: "heightUnit",
    label: "Высота",
    type: "range",
    min: 35,
    max: 300,
    step: 1,
  },
];

export const SizeTab = ({ size, style, onSizeChange }: Props) => {
  const handleChange = (value: FormValue<Theme["size"]>) => {
    onSizeChange(Number(value.widthUnit), Number(value.heightUnit));
  };

  return (
    <List mode="v" style={style}>
      <Card>
        <CardHeader title="Размеры" />
        <CardContent>
          <List>
            <TextListItem text={`${size.widthUnit}px ${size.heightUnit}px`} />
          </List>
          <Form value={size} onChange={handleChange} fields={fields} />
        </CardContent>
      </Card>
    </List>
  );
};
