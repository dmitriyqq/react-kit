import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { EditThemeComponent } from "../components/EditThemeComponent/EditThemeComponent";
import { PaginatedDataListTest } from "./PaginatedDataList.stories";
import { Grid, GridItem } from "../components/Grid";
import { Card } from "../components/Card/Card";
import { CardHeader } from "../components/Card/CardHeader";
import { CardContent } from "../components/Card/CardContent";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { List } from "../components/List";

export default {
  title: "EditThemeComponent",
  component: EditThemeComponent,
} as Meta;

const Template: Story = (args) => {
  const areas = [
    ["text", "form"],
    ["buttons", "list"],
  ];

  const rows = ["1fr", "1fr"];
  const columns = ["1fr", "1fr"];

  return (
    <EditThemeComponent {...args}>
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
                <Text variant="header">Header</Text>
                <Text variant="highlight">Highlight</Text>
                <Text variant="regular">Regular</Text>
                <Text variant="label">label</Text>
              </List>
            </CardContent>
          </Card>
        </GridItem>
        <GridItem area="buttons">
          <Card style={{ width: "100%", height: "100%", maxHeight: "400px" }}>
            <CardHeader title="Кнопки" />
            <CardContent>
              <Button themeColor="primary">Primary</Button>
              <Button themeColor="secondary" width="2u">
                Secondary
              </Button>
              <Button themeColor="success" width="3u">
                Success
              </Button>
              <Button themeColor="info" width="4u">
                Info
              </Button>
              <Button themeColor="danger" width="2u">
                Danger
              </Button>
              <Button themeColor="warning" width="3u">
                Warning
              </Button>
              <Button themeColor="disabled" width="3u">
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
