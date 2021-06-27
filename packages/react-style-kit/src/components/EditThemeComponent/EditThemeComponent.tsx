import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { defaultTheme } from "../../themes/defaultTheme";
import { List } from "../List";
import { ColorTab } from "./ColorTab/ColorTab";
import { Border, Color, Spacing, TextStyle, Theme } from "../../themes/";
import { Tabs } from "../Tabs";
import { BorderTab } from "./BorderTab/BorderTab";
import { TextTab } from "./TextTab/TextTab";
import { SizeTab } from "./SizeTab/SizeTab";
import { SpacingTab } from "./SpacingTab/SpacingTab";
import { BoxShadowEntity, BoxShadowTab } from "./BoxShadowTab/BoxShadowTab";
import { VariantEntity, VariantTab } from "./VariantsTab/VariantsTab";
import { Button } from "../Button";
import { generateVariants } from "./generateVariants";

export const downloadFile = (fileUrl: string, fileName: string) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.click();
};

interface Props {
  onThemeChange: (theme: Theme) => void;
  theme: Theme;
}

type CustomizableThemeProperty =
  | "spacings"
  | "size"
  | "boxShadows"
  | "colors"
  | "borders"
  | "textStyles"
  | "variants";

export const EditThemeComponent: FC<Props> = ({
  children,
  theme,
  onThemeChange,
}) => {
  const [selectedTab, setSelectedTab] = useState("border");

  const updateThemeProperty = <T extends object>(
    propertyName: CustomizableThemeProperty,
    entityName: string,
    entity?: T
  ) => {
    if (!entity) {
      const oldProperty = Object.entries(theme[propertyName]).filter(
        ([key]) => key !== entityName
      );

      const newProperty = {};
      for (const [key, value] of oldProperty) {
        (newProperty as any)[key] = value;
      }

      const newTheme = {
        ...theme,
        [propertyName]: newProperty,
      };
      onThemeChange(newTheme);
    } else {
      const newTheme = {
        ...theme,
        [propertyName]: {
          ...theme[propertyName],
          [entityName]: entity,
        },
      };
      onThemeChange(newTheme);
    }
  };

  const deleteThemeProps = (
    propertyName: CustomizableThemeProperty,
    entityName: string
  ) => {
    updateThemeProperty(propertyName, entityName, undefined);
  };

  const handleColorChanged = (colorName: string, color: Color) =>
    updateThemeProperty("colors", colorName, color);

  const handleBorderChanged = (borderName: string, border: Border) =>
    updateThemeProperty("borders", borderName, border);

  const handleSpacingChanged = (spacingName: string, spacing: Spacing) =>
    updateThemeProperty("spacings", spacingName, spacing);

  const handleTextStyleChanged = (
    textStyleName: string,
    textStyle: TextStyle
  ) => updateThemeProperty("textStyles", textStyleName, textStyle);

  const handleBoxShadowChanged = ({
    boxShadowName,
    ...rest
  }: BoxShadowEntity) => updateThemeProperty("boxShadows", boxShadowName, rest);

  const handleVariantChanged = ({ variantName, ...rest }: VariantEntity) =>
    updateThemeProperty("variants", variantName, rest);

  const handleSizeChanged = (widthUnit: number, heightUnit: number) => {
    onThemeChange({
      ...theme,
      size: {
        widthUnit,
        heightUnit,
      },
    });
  };

  const handleBoxShadowDeleted = (boxShadow: BoxShadowEntity) =>
    deleteThemeProps("boxShadows", boxShadow.boxShadowName);

  const handleVariantDeleted = (variant: VariantEntity) => {
    deleteThemeProps("variants", variant.variantName);
  };

  const tabs = [
    {
      id: "color",
      label: "Палитра",
    },
    {
      id: "border",
      label: "Границы",
    },
    {
      id: "spacing",
      label: "Отступы",
    },
    {
      id: "size",
      label: "Размеры",
    },
    {
      id: "text",
      label: "Текст",
    },
    {
      id: "boxShadow",
      label: "Тени",
    },
    {
      id: "variants",
      label: "Варианты",
    },
  ];

  const handleExportTheme = () => {
    const modelData = JSON.stringify(theme, null, 2);
    const blob = new Blob([modelData], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const fileName = "theme.json";

    downloadFile(url, fileName);
  };

  const handleGenerateVariants = () => {
    onThemeChange({
      ...theme,
      variants: { ...theme.variants, ...generateVariants() },
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <List mode="v">
        <List mode="h">
          <Button variant="successButton" onClick={handleExportTheme}>
            Выгрузить тему
          </Button>
          <Button variant="warningButton" onClick={handleGenerateVariants}>
            Обновить варианты
          </Button>
        </List>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab}
          onTabSelected={setSelectedTab}
        />
        <List mode="h" align="flex-start">
          {selectedTab === "color" && (
            <ColorTab
              style={{ flex: "1 1", margin: "5px", maxWidth: "700px" }}
              colors={theme.colors}
              onColorChanged={handleColorChanged}
              onNewColor={handleColorChanged}
            />
          )}
          {selectedTab === "border" && (
            <BorderTab
              style={{ flex: "1 1", margin: "5px", maxWidth: "700px" }}
              onBorderChanged={handleBorderChanged}
              onNewBorder={handleBorderChanged}
              theme={theme}
            />
          )}
          {selectedTab === "spacing" && (
            <SpacingTab
              style={{ flex: "1 1", margin: "5px", maxWidth: "700px" }}
              spacings={theme.spacings}
              onNewSpacing={handleSpacingChanged}
              onSpacingChanged={handleSpacingChanged}
            />
          )}
          {selectedTab === "size" && (
            <SizeTab
              style={{ flex: "1 1", margin: "5px", maxWidth: "700px" }}
              size={theme.size}
              onSizeChange={handleSizeChanged}
            />
          )}
          {selectedTab === "text" && (
            <TextTab
              style={{ flex: "1 1", margin: "5px", maxWidth: "700px" }}
              textStyles={theme.textStyles}
              onNewTextStyle={handleTextStyleChanged}
              onTextStyleChange={handleTextStyleChanged}
            />
          )}
          {selectedTab === "boxShadow" && (
            <BoxShadowTab
              style={{ flex: "1 1", margin: "5px", maxWidth: "700px" }}
              boxShadows={theme.boxShadows}
              onBoxShadowCreate={handleBoxShadowChanged}
              onBoxShadowUpdate={handleBoxShadowChanged}
              onBoxShadowDelete={handleBoxShadowDeleted}
            />
          )}{" "}
          {selectedTab === "variants" && (
            <VariantTab
              style={{ flex: "1 1", margin: "5px", maxWidth: "700px" }}
              variants={theme.variants}
              onVariantCreate={handleVariantChanged}
              onVariantUpdate={handleVariantChanged}
              onVariantDelete={handleVariantDeleted}
              borderVariants={Object.keys(theme.borders)}
              colorVariants={Object.keys(theme.colors)}
              textVariants={Object.keys(theme.textStyles)}
              boxShadowVariants={Object.keys(theme.boxShadows)}
              spacingVariants={Object.keys(theme.spacings)}
            />
          )}
        </List>
        {children}
      </List>
    </ThemeProvider>
  );
};
