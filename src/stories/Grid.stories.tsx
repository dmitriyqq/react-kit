import { Story, Meta } from "@storybook/react/types-6-0";
import {Grid, GridItem, Props } from "../components/Grid";

export default {
  title: "Grid",
  component: Grid,
} as Meta;

const ColorBlock = ({ color }) => {
  return <div style={{
    width: '100%',
    height: '100%',
    backgroundColor: color,
  }} />
}

const Template: Story<Props> = (args) => (
  <Grid style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} {...args}>
    <GridItem area='sideBar'>
      <ColorBlock color='red' />
    </GridItem>
    <GridItem area='navBar'>
      <ColorBlock color='blue' />
    </GridItem>
    <GridItem area='footer'>
      <ColorBlock color='yellow' />
    </GridItem>
    <GridItem area='content'>
      <ColorBlock color='green' />
    </GridItem>
  </Grid>
);

export const GridStory = Template.bind({});
GridStory.args = {
  areas: [
    [ "sideBar", "navBar"],
    [ "sideBar", "content"],
    [ "sideBar", "footer"],
  ],
  rows: ["50px", "auto", "150px"],
  columns: ["300px", "auto"],
  columnGap: 15,
  rowGap: 20,
};
