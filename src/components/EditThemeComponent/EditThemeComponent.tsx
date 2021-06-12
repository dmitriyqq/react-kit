import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { defaultTheme } from "../../themes/defaultTheme";
import { List } from "../List";
import { ColorTab } from "./ColorTab/ColorTab";
import { Border, Color, Spacing, TextStyle, Theme } from "../../themes/theme";
import { Tabs } from "../Tabs";
import { BorderTab } from "./BorderTab/BorderTab";
import { TextTab } from "./TextTab/TextTab";
import { SizeTab } from "./SizeTab/SizeTab";
import { SpacingTab } from "./SpacingTab/SpacingTab";
import { BoxShadowEntity, BoxShadowTab } from "./BoxShadowTab/BoxShadowTab";

export const EditThemeComponent: FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [selectedTab, setSelectedTab] = useState("border");

  const updateThemeProperty = <T extends object>(
    propertyName: keyof Theme,
    entityName: string,
    entity?: T
  ) => {
    setTheme((prev: any) => {
      if (!entity) {
        const oldProperty = Object.entries(prev[propertyName]).filter(
          ([key]) => key !== entityName
        );

        const newProperty = {};
        for (const [key, value] of oldProperty) {
          (newProperty as any)[key] = value;
        }

        return {
          ...theme,
          [propertyName]: newProperty,
        };
      } else {
        return {
          ...prev,
          [propertyName]: {
            ...prev[propertyName],
            [entityName]: entity,
          },
        };
      }
    });
  };
  const deleteThemeProps = (propertyName: keyof Theme, entityName: string) => {
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

  const handleSizeChanged = (widthUnit: number, heightUnit: number) => {
    setTheme((prev: any) => ({
      ...prev,
      size: {
        widthUnit,
        heightUnit,
      },
    }));
  };

  const handleBoxShadowDeleted = (boxShadow: BoxShadowEntity) =>
    deleteThemeProps("boxShadows", boxShadow.boxShadowName);

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
  ];

  return (
    <ThemeProvider theme={theme}>
      <List mode="v">
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
          )}
        </List>
        {children}
      </List>
    </ThemeProvider>
  );
};
