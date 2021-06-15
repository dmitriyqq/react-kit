import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { EditThemeComponent } from "../components/EditThemeComponent/EditThemeComponent";
import { PaginatedDataListTest } from "./list/PaginatedDataList.stories";
import { Grid, GridItem } from "../components/Grid";
import { Card } from "../components/Card/Card";
import { CardHeader } from "../components/Card/CardHeader";
import { CardContent } from "../components/Card/CardContent";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { List } from "../components/List";
import { defaultTheme } from "../themes/defaultTheme";
import { Theme } from "../themes";

export default {
  title: "EditThemeComponent",
  component: EditThemeComponent,
} as Meta;

const loadTheme = (): Theme => {
  const themeJson = localStorage.getItem("theme");

  try {
    if (themeJson) {
      return JSON.parse(themeJson) as Theme;
    }
  } catch (error) {
    console.error("failed to load theme from localStorage");
  }

  return defaultTheme;
};

const Template: Story = (args) => {
  const [theme, setTheme] = useState(loadTheme());

  const areas = [
    ["text", "form"],
    ["buttons", "list"],
  ];

  const rows = ["1fr", "1fr"];
  const columns = ["1fr", "1fr"];

  const handleThemeChange = (newTheme: Theme) => {
    localStorage.setItem("theme", JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  return (
    <EditThemeComponent
      {...args}
      theme={theme}
      onThemeChange={handleThemeChange}
    >
      <Grid
        areas={areas}
        columns={columns}
        rows={rows}
        style={{ maxHeight: "1000px" }}
        rowGap={15}
        columnGap={15}
      >
        <GridItem area="text">
          <Card style={{ width: "100%", height: "100%", maxHeight: "400px" }}>
            <CardHeader title="Текст" />
            <CardContent>
              <List>
                <Text variant="headerText">Header</Text>
                <Text variant="highlightText">Highlight</Text>
                <Text variant="regularText">Regular</Text>
                <Text variant="labelText">Label</Text>
                <Text variant="sublabelText">Sublabel</Text>
              </List>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem area="buttons">
          <Card style={{ width: "100%", height: "100%", maxHeight: "400px" }}>
            <CardHeader title="Кнопки" />
            <CardContent>
              <Button variant="primaryButton">Primary</Button>
              <Button variant="secondaryButton" width="2u">
                Secondary
              </Button>
              <Button variant="successButton" width="3u">
                Success
              </Button>
              <Button variant="primaryButton" width="4u">
                Info
              </Button>
              <Button variant="dangerButton" width="2u">
                Danger
              </Button>
              <Button variant="warningButton" width="3u">
                Warning
              </Button>
              <Button disabled={true} variant="primaryButton" width="3u">
                Disabled
              </Button>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem area="form"></GridItem>
        <GridItem area="list">
          <Card style={{ width: "100%", height: "100%", maxHeight: "400px" }}>
            <CardHeader title="Список" />
            <CardContent>
              <PaginatedDataListTest initialPageSize={10} />
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </EditThemeComponent>
  );
};

export const EditThemeComponentStory = Template.bind({});
EditThemeComponentStory.args = {};
