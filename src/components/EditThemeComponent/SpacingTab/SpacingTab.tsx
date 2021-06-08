import React from "react";
import { Spacing, Theme } from "../../../themes/theme";
import { List, ListItem } from "../../List";
import { CSSProperties, FC, useState } from "react";
import { Card } from "../../Card/Card";
import { CardHeader } from "../../Card/CardHeader";
import { CardContent } from "../../Card/CardContent";
import { SpacingList } from "./SpacingList";
import { FormFieldsType, FormValue } from "../../../model";
import { Form } from "../../Form";
import { Button } from "../../Button";

export const getSpacingDisplayString = (spacing: Spacing) =>
  `${spacing.top} ${spacing.right} ${spacing.bottom} ${spacing.left}`;

interface Props {
  style?: CSSProperties;
  spacings: Theme["spacings"];
  onNewSpacing: (spacingName: string, spacing: Spacing) => void;
  onSpacingChanged: (spacingName: string, spacing: Spacing) => void;
}

interface SpacingFormValue {
  spacingName: string;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const fields: FormFieldsType<SpacingFormValue> = [
  {
    name: "spacingName",
    type: "text",
    label: "Название",
  },
  {
    name: "top",
    type: "range",
    label: "Сверху",
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: "right",
    type: "range",
    label: "Справа",
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: "bottom",
    type: "range",
    label: "Снизу",
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: "left",
    type: "range",
    label: "Слева",
    min: 0,
    max: 100,
    step: 1,
  },
];

export const SpacingTab: FC<Props> = ({
  style,
  spacings,
  onNewSpacing,
  onSpacingChanged,
}) => {
  const [selectedSpacing, setSelectedSpacing] = useState<string | null>(null);
  const [value, setValue] = useState<FormValue<SpacingFormValue>>({
    spacingName: "",
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  });

  const themeSpacings: { name: string; spacing: Spacing }[] = [];
  for (const themeSpacingName in spacings) {
    themeSpacings.push({
      name: themeSpacingName,
      spacing: spacings[themeSpacingName],
    });
  }

  const handleSpacingSelected = (spacingName: string) => {
    setSelectedSpacing(spacingName);
    setValue({ spacingName, top: 5, bottom: 5, left: 5, right: 5 });
  };

  const handleSpacingChanged = (value: FormValue<SpacingFormValue>) => {
    setValue(value);
  };

  const handleApplyChanges = () => {
    if (value.spacingName) {
      const { top, right, left, bottom } = value;
      onSpacingChanged(value.spacingName, {
        top: Number(top),
        right: Number(right),
        bottom: Number(bottom),
        left: Number(left),
      });
    }
  };

  const handleAddNewSpacing = () => {
    onNewSpacing("newSpacing", {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5,
    });
  };

  return (
    <List mode="v" style={style}>
      {selectedSpacing && (
        <Card>
          <CardHeader title="Отступ" />
          <CardContent>
            <List>
              <ListItem label={selectedSpacing}>
                {getSpacingDisplayString(value)}
              </ListItem>
            </List>
            <Form
              fields={fields}
              onChange={handleSpacingChanged}
              value={value}
            />
            <Button onClick={handleApplyChanges}>Применить изменения</Button>
          </CardContent>
        </Card>
      )}
      <Card>
        <CardHeader title="Отступы" />
        <CardContent>
          <SpacingList
            spacings={themeSpacings}
            onSpacingSelected={handleSpacingSelected}
          />
          <Button onClick={handleAddNewSpacing}>Добавить новый отступ</Button>
        </CardContent>
      </Card>
    </List>
  );
};
