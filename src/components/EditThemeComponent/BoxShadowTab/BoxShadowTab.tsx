import React, { useState } from "react";
import { CSSProperties } from "react";
import { BoxShadow, TextStyle, Theme } from "../../../themes/theme";
import { List } from "../../List";
import { Card } from "../../Card/Card";
import { CardHeader } from "../../Card/CardHeader";
import { CardContent } from "../../Card/CardContent";
import { Form } from "../../Form";
import { FormFieldsType, FormValue } from "../../../model";
import { Button } from "../../Button";

interface Props {
  style?: CSSProperties;
  textStyles: Theme["boxShadows"];
  onNewTextStyle: (textName: string, text: TextStyle) => void;
  onTextStyleChange: (textName: string, text: TextStyle) => void;
}

interface BoxShadowFormValue extends BoxShadow {
  boxShadowName: string;
}

const fields: FormFieldsType<BoxShadowFormValue> = [
  {
    name: "boxShadowName",
    label: "Название",
    type: "text",
  },
  {
    name: "hOffset",
    label: "Отступ по высоте",
    type: "text",
  },
  {
    name: "vOffset",
    label: "Отступ по ширине",
    type: "text",
  },
  {
    name: "blur",
    label: "Название",
    type: "text",
  },
  {
    name: "spread",
    label: "Название",
    type: "text",
  },
];

export const BoxShadowTab = ({ style, boxShadows }) => {
  const [selectedBoxShadow, setSelectedBoxShadow] = useState();
  const [value, setValue] = useState<FormValue<BoxShadowFormValue>>({
    boxShadowName: "",
    hOffset: 4,
    vOffset: 4,
    blur: 5,
    spread: 4,
  });

  const handleFormChange = (value: FormValue<BoxShadowFormValue>) => {
    setValue(value);
  };

  const handleApplyChanges = () => {};

  const handleBoxShadowSelected = (boxShadowName: string) => {};

  return (
    <List mode="v" style={style}>
      <Card>
        <CardHeader title="Редактирование тени" />
        <CardContent>
          <Form fields={fields} value={value} onChange={handleFormChange} />
          <Button onClick={handleApplyChanges}>Применить изменения</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="тени" />
        <CardContent>
          <BoxShadowList
            boxShadows={boxShadows}
            onBoxShadowSelected={handleBoxShadowSelected}
          />
        </CardContent>
      </Card>
    </List>
  );
};
