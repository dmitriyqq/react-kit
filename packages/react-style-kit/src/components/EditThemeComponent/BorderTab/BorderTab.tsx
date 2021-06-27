import React, { CSSProperties, FC, useState } from "react";
import { Card } from "../../Card/Card";
import { CardContent } from "../../Card/CardContent";
import { List, ListItem } from "../../List";
import { CardHeader } from "../../Card/CardHeader";
import { FormFieldsType, FormValue, getFormValue } from "../../../model";
import { Border, Theme } from "../../../themes";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { BorderList } from "./BorderList";
import { BorderBlock } from "./BorderBlock";

interface Props {
  theme: Theme;
  borders?: Theme["borders"];
  onNewBorder: (borderName: string, border: Border) => void;
  onBorderChanged: (borderName: string, border: Border) => void;
  style?: CSSProperties;
}

interface BorderFormValue extends Border {
  borderName: string;
}

const options = [
  { id: "solid", label: "solid", value: "solid" },
  { id: "dotted", label: "Точки", value: "dotted" },
  { id: "dashed", label: "Тире", value: "dashed" },
  { id: "double", label: "Двойной", value: "double" },
  { id: "groove", label: "Грув", value: "groove" },
  { id: "ridge", label: "Ридж", value: "ridge" },
  { id: "inset", label: "Внутри", value: "inset" },
  { id: "outset", label: "Снаружи", value: "outset" },
  { id: "none ", label: "None", value: "none" },
  { id: "hidden", label: "Спрятан", value: "hidden" },
];

const fields: FormFieldsType<BorderFormValue> = [
  {
    label: "Название",
    name: "borderName",
    type: "text",
  },
  {
    label: "Радиус",
    name: "radius",
    type: "range",
    min: 0,
    max: 100,
    step: 1,
  },
  {
    label: "Стиль",
    name: "style",
    type: "select",
    options,
  },
  {
    name: "width",
    type: "range",
    label: "Ширина",
    min: 0,
    max: 10,
    step: 0.1,
  },
];

export const BorderTab: FC<Props> = ({
  theme,
  onNewBorder,
  onBorderChanged,
  style,
}) => {
  const [value, setValue] = useState<FormValue<BorderFormValue>>({
    borderName: "",
    radius: 50,
    width: 2,
    style: { id: "dashed", label: "Тире", value: "dashed" },
  });
  const [selectedBorder, setSelectedBorder] = useState<string | null>(null);

  const borders = theme.borders;

  const themeBorders: { name: string; border: Border }[] = [];
  for (const borderName in borders) {
    themeBorders.push({
      name: borderName,
      border: (borders as any)[borderName as any] as any,
    });
  }

  const handleNewBorder = () => {
    onNewBorder("newBorder", {
      radius: 50,
      width: 2,
      style: "dashed",
    });
  };

  const handleBorderChange = () => {
    if (value.borderName) {
      const { width, radius, style, borderName } = value;
      onBorderChanged(borderName, {
        width: Number(width),
        radius: Number(radius),
        style: style.value,
      });
    }
  };

  const handleBorderSelected = (borderName: string) => {
    const border = (borders as any)[borderName];
    if (border) {
      const { style, radius, width } = border;
      setSelectedBorder(borderName);

      setValue({
        borderName,
        style: options.find((s) => s.id === style),
        radius: radius,
        width: width,
      });
    }
  };

  return (
    <List mode="v" style={style}>
      {selectedBorder && (
        <Card>
          <CardHeader title="Редактировать границу" />
          <CardContent>
            <List>
              <ListItem label={selectedBorder}>
                <BorderBlock border={getFormValue(value, fields)} />
              </ListItem>
            </List>
            <Form fields={fields} value={value} onChange={setValue} />
            <Button onClick={handleBorderChange}>Применить изменения</Button>
          </CardContent>
        </Card>
      )}
      <Card>
        <CardHeader title="Границы" />
        <CardContent>
          <Button onClick={handleNewBorder}>Добавить новый</Button>
          <BorderList
            borders={themeBorders}
            onBorderSelect={handleBorderSelected}
          />
        </CardContent>
      </Card>
    </List>
  );
};
