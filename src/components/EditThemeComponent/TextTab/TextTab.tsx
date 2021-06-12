import React, { CSSProperties, FC, useEffect, useState } from "react";
import { List, ListItem } from "../../List";
import { TextStyle, Theme } from "../../../themes/theme";
import { Card } from "../../Card/Card";
import { CardHeader } from "../../Card/CardHeader";
import { CardContent } from "../../Card/CardContent";
import { Form } from "../../Form";
import { FormFieldsType, FormValue, getFormValue } from "../../../model";
import { TextList } from "./TextList";
import { Button } from "../../Button";
import { TextBlock } from "./TextBlock";
import { defaultFonts } from "./fonts";

interface Props {
  style?: CSSProperties;
  textStyles: Theme["textStyles"];
  onNewTextStyle: (textName: string, text: TextStyle) => void;
  onTextStyleChange: (textName: string, text: TextStyle) => void;
}

interface TextStyleFormValue extends TextStyle {
  textStyleName: string;
}

const fields: FormFieldsType<TextStyleFormValue> = [
  {
    label: "Название",
    name: "textStyleName",
    type: "text",
  },
  {
    label: "Размер",
    name: "fontSize",
    type: "range",
    min: 8,
    max: 100,
    step: 1,
  },
  {
    label: "Толщина",
    name: "fontWeight",
    type: "range",
    min: 100,
    max: 900,
    step: 25,
  },
  {
    label: "Трансформация",
    name: "textTransform",
    type: "select",
    options: [
      {
        id: "none",
        label: "None",
        value: "none",
      },
      {
        id: "capitalize",
        label: "Capitalize",
        value: "capitalize",
      },
      {
        id: "uppercase",
        label: "Uppercase",
        value: "uppercase",
      },
      {
        id: "lowercase",
        label: "Lowercase",
        value: "lowercase",
      },
    ],
  },
  {
    label: "Шрифт",
    name: "fontFamily",
    type: "select",
    options: defaultFonts.map((f) => ({ id: f, value: f, label: f })),
  },
];

export const TextTab: FC<Props> = ({
  textStyles,
  onNewTextStyle,
  onTextStyleChange,
  style,
}) => {
  const [value, setValue] = useState<FormValue<TextStyleFormValue>>({
    textStyleName: "",
    fontFamily: "sans-serif",
    fontSize: 16,
    fontWeight: 500,
    textTransform: {
      id: "none",
      label: "None",
      value: "none",
    },
  });
  const [selectedTextStyle, setSelectedTextStyle] = useState<string | null>();

  const themeTextStyles: { name: string; textStyle: TextStyle }[] = [];
  for (const themeTextStyleName in textStyles) {
    themeTextStyles.push({
      name: themeTextStyleName,
      textStyle: textStyles[themeTextStyleName],
    });
  }

  const handleTextStyleSelected = (textStyleName: string) => {
    const themeTextStyle = themeTextStyles.find(
      (ts) => ts.name === textStyleName
    );

    console.log(textStyleName, themeTextStyle);

    if (themeTextStyle) {
      setSelectedTextStyle(textStyleName);
      const {
        fontSize,
        fontFamily,
        fontWeight,
        textTransform,
      } = themeTextStyle.textStyle;
      setValue({
        textStyleName: textStyleName,
        fontFamily: { id: fontFamily, value: fontFamily, label: fontFamily },
        fontSize,
        fontWeight,
        textTransform,
      });
    }
  };

  const handleClick = () => {
    onNewTextStyle("newTextStyle", {
      fontFamily: "sans-serif",
      fontSize: 16,
      fontWeight: 500,
      textTransform: "none",
    });
  };

  const handleApplyChanges = () => {
    if (selectedTextStyle) {
      const { textStyleName, ...rest } = getFormValue(value, fields);
      onTextStyleChange(textStyleName, rest);
    }
  };

  return (
    <List mode="v" style={style}>
      {selectedTextStyle && (
        <Card>
          <CardHeader title="Редактирование стиля текста" />
          <CardContent>
            <List>
              <ListItem label={selectedTextStyle}>
                <TextBlock textStyle={getFormValue(value, fields)} />
              </ListItem>
            </List>
            <Form fields={fields} value={value} onChange={setValue} />
            <Button onClick={handleApplyChanges}>Применить изменения</Button>
          </CardContent>
        </Card>
      )}
      <Card>
        <CardHeader title="Редактирование стиля текста" />
        <CardContent>
          <TextList
            textStyles={themeTextStyles}
            onTextStyleSelected={handleTextStyleSelected}
          />
        </CardContent>
        <Button onClick={handleClick}>Добавить новый стиль</Button>
      </Card>
    </List>
  );
};
