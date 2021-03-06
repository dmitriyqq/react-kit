import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { defaultTheme } from "../src";
import { defaultDarkTheme } from "../src";

import "remixicon/fonts/remixicon.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const themes = [defaultTheme, defaultDarkTheme];
addDecorator(withThemesProvider(themes));
