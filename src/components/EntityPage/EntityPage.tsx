import React, { CSSProperties, FC, useState } from "react";
import { FormValue, getFormValue } from "../../model";
import { TextStyle } from "../../themes/theme";
import { List, ListItem } from "../List";
import { Card } from "../Card/Card";
import { CardHeader } from "../Card/CardHeader";
import { CardContent } from "../Card/CardContent";
import { TextBlock } from "../EditThemeComponent/TextTab/TextBlock";
import { Form } from "../Form";
import { Button } from "../Button";
import { TextList } from "../EditThemeComponent/TextTab/TextList";

interface Props<T> {
  initialFormValue: { ...T, entityName: string};
  style?: CSSProperties;
  entityName: string;
  renderForm: () => void;
  renderList: () => void;
}

export const EntityPage: FC<Props> = () => {
  const [value, setValue] = useState<FormValue<TextStyleFormValue>>();
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
    <List mode="v">
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
