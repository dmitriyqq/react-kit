import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { defaultTheme } from "../../themes/defaultTheme";
import { List } from "../List";
import { ColorTab } from "./ColorTab/ColorTab";
import { Border, Color, Spacing, TextStyle } from "../../themes/theme";
import { Tabs } from "../Tabs";
import { Card } from "../Card/Card";
import { CardContent } from "../Card/CardContent";
import { BorderTab } from "./BorderTab/BorderTab";
import { TextTab } from "./TextTab/TextTab";
import { SizeTab } from "./SizeTab/SizeTab";
import { SpacingTab } from "./SpacingTab/SpacingTab";

interface ThemeSizeUnits {
  widthUnit: number;
  heightUnit: number;
}

export const EditThemeComponent: FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [selectedTab, setSelectedTab] = useState("border");

  const handleColorChanged = (colorName: string, color: Color) => {
    setTheme((prev: any) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorName]: color,
      },
    }));
  };

  const handleBorderChanged = (borderName: string, border: Border) => {
    setTheme((prev: any) => ({
      ...prev,
      borders: {
        ...prev.borders,
        [borderName]: border,
      },
    }));
  };

  const handleSpacingChanged = (spacingName: string, spacing: Spacing) => {
    setTheme((prev: any) => ({
      ...prev,
      spacings: {
        ...prev.spacings,
        [spacingName]: spacing,
      },
    }));
  };

  const handleSizeChanged = (widthUnit: number, heightUnit: number) => {
    setTheme((prev: any) => ({
      ...prev,
      size: {
        widthUnit,
        heightUnit,
      },
    }));
  };

  const handleTextStyleChanged = (
    textStyleName: string,
    textStyle: TextStyle
  ) => {
    setTheme((prev: any) => ({
      ...prev,
      textStyles: {
        ...prev.textStyles,
        [textStyleName]: textStyle,
      },
    }));
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
  ];

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab}
        onTabSelected={setSelectedTab}
      />
      <List mode="h" align="flex-start">
        {selectedTab === "color" && (
          <ColorTab
            style={{ flex: "1 1", margin: "5px" }}
            colors={theme.colors}
            onColorChanged={handleColorChanged}
            onNewColor={handleColorChanged}
          />
        )}
        {selectedTab === "border" && (
          <BorderTab
            style={{ flex: "1 1", margin: "5px" }}
            onBorderChanged={handleBorderChanged}
            onNewBorder={handleBorderChanged}
            theme={theme}
          />
        )}
        {selectedTab === "spacing" && (
          <SpacingTab
            style={{ flex: "1 1", margin: "5px" }}
            spacings={theme.spacings}
            onNewSpacing={handleSpacingChanged}
            onSpacingChanged={handleSpacingChanged}
          />
        )}
        {selectedTab === "size" && (
          <SizeTab
            style={{ flex: "1 1", margin: "5px" }}
            size={theme.size}
            onSizeChange={handleSizeChanged}
          />
        )}
        {selectedTab === "text" && (
          <TextTab
            style={{ flex: "1 1", margin: "5px" }}
            textStyles={theme.textStyles}
            onNewTextStyle={handleTextStyleChanged}
            onTextStyleChange={handleTextStyleChanged}
          />
        )}
        <Card style={{ flex: "1 1", margin: "5px" }}>
          <CardContent>{children}</CardContent>
        </Card>
      </List>
    </ThemeProvider>
  );
};
