import React, { CSSProperties, FC, useState } from "react";
import { Theme, Color } from "../../../themes/theme";
import { Form } from "../../Form";
import { ColorPalette } from "./ColorPalette";
import { FormFieldsType, FormValue } from "../../../model";
import { Card } from "../../Card/Card";
import { CardHeader } from "../../Card/CardHeader";
import { CardContent } from "../../Card/CardContent";
import { ColorPaletteList } from "./ColorPaletteList";
import { List, ListItem, TextListItem } from "../../List";
import { Button } from "../../Button";
import {
  buildHexColor,
  generateColorDescription,
  generateColorPalette,
  getRgbFromHex,
  hsv2rgb,
  rgb2hsv,
} from "./generateColorPalette";
import { ColorPicker } from "../ColorPicker";

interface Props {
  colors: Theme["colors"];
  onNewColor: (colorName: string, Color: Color) => void;
  onColorChanged: (colorName: string, Color: Color) => void;
  style?: CSSProperties;
}

interface EditColorType {
  colorName: string;
  hue: number;
  saturation: number;
  minSaturation: number;
  maxSaturation: number;
  minValue: number;
  maxValue: number;
  value: number;
}

const fields: FormFieldsType<EditColorType> = [
  {
    name: "colorName",
    type: "text",
    label: "Color name",
  },
  {
    label: "hue",
    name: "hue",
    type: "range",
    min: 0.0,
    max: 1.0,
    step: 0.01,
  },
  {
    label: "saturation",
    name: "saturation",
    type: "range",
    min: 0.0,
    max: 1.0,
    step: 0.01,
  },
  {
    label: "saturation min",
    name: "minSaturation",
    type: "range",
    min: 0.0,
    max: 0.5,
    step: 0.01,
  },
  {
    label: "saturation max",
    name: "maxSaturation",
    type: "range",
    min: 0.5,
    max: 1.0,
    step: 0.01,
  },
  {
    label: "value",
    name: "value",
    type: "range",
    min: 0.0,
    max: 1.0,
    step: 0.01,
  },
  {
    label: "value min",
    name: "minValue",
    type: "range",
    min: 0.0,
    max: 0.5,
    step: 0.01,
  },
  {
    label: "value max",
    name: "maxValue",
    type: "range",
    min: 0.5,
    max: 1.0,
    step: 0.01,
  },
];

export const ColorTab: FC<Props> = ({
  colors,
  onNewColor,
  onColorChanged,
  style,
}) => {
  const [value, setValue] = useState<FormValue<EditColorType>>({
    colorName: "",
    hue: 0.5,
    saturation: 0.5,
    value: 0.5,
    minSaturation: 0.0,
    maxSaturation: 1.0,
    minValue: 0.0,
    maxValue: 1.0,
  });
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const themeColors: { name: string; color: string }[] = [];
  for (const themeColorName in colors) {
    themeColors.push({
      name: themeColorName,
      color: colors[themeColorName][500],
    });
  }

  const handleColorSelected = (colorName?: string) => {
    const colorSelected = themeColors.find((c) => c.name === colorName);
    if (colorSelected) {
      setSelectedColor(colorSelected?.color ?? "");
      const [red, green, blue] = getRgbFromHex(colorSelected?.color);
      const [hue, saturation, value] = rgb2hsv(red, green, blue);
      setValue((prev) => ({
        ...prev,
        colorName,
        hue,
        saturation,
        value,
        minSaturation: 0.0,
        maxSaturation: 1.0,
        minValue: 0.0,
        maxValue: 1.0,
      }));
    }
  };

  const handleApplyChanges = () => {
    if (selectedColor) {
      const colorPalette = generateColorPalette(
        selectedColor,
        value.minSaturation,
        value.maxSaturation,
        value.minValue,
        value.maxValue
      );
      onColorChanged(value.colorName, generateColorDescription(colorPalette));
    }
  };

  const handleAddColor = () => {
    const colorPalette = generateColorPalette(
      "#331155",
      value.minSaturation,
      value.maxSaturation,
      value.minValue,
      value.maxValue
    );
    const colorDescription = generateColorDescription(colorPalette);

    onNewColor("newColor", colorDescription);
  };

  const handleFormChanges = (value: FormValue<EditColorType>) => {
    setValue(value);
    const [red, green, blue] = hsv2rgb(
      value.hue,
      value.saturation,
      value.value
    );
    setSelectedColor(() => buildHexColor({ red, green, blue }));
  };

  const handleColorPickerChange = (color: string) => {
    setSelectedColor(color);
    const [red, green, blue] = getRgbFromHex(color);
    const [hue, saturation, value] = rgb2hsv(red, green, blue);
    setValue((prev) => ({ ...prev, hue, saturation, value }));
  };

  return (
    <List mode="v" style={style}>
      {selectedColor && (
        <>
          <Card>
            <CardHeader title="Редактирование цвета" />
            <CardContent>
              <>
                <ListItem label={value.colorName}>
                  <ColorPalette
                    baseColor={selectedColor}
                    minSaturation={value.minSaturation}
                    maxSaturation={value.maxSaturation}
                    minValue={value.minValue}
                    maxValue={value.maxValue}
                  />
                </ListItem>
                <List>
                  <TextListItem label="RGB Цвет" text={selectedColor} />
                  <ColorPicker
                    value={selectedColor}
                    onChange={handleColorPickerChange}
                  />
                </List>
                <Form
                  fields={fields}
                  value={value}
                  onChange={handleFormChanges}
                />
                <Button onClick={handleApplyChanges}>
                  Применить изменения
                </Button>
              </>
            </CardContent>
          </Card>
        </>
      )}

      <Card>
        <CardHeader title="Палитра цветов" />
        <CardContent>
          <ColorPaletteList
            colors={themeColors}
            onColorSelected={handleColorSelected}
          />
          <Button onClick={handleAddColor}>Добавит цвет</Button>
        </CardContent>
      </Card>
    </List>
  );
};
