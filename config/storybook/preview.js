import { addDecorator } from "@storybook/react";
import { Theme } from "@/shared/const/theme";
import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { TranslationDecorator } from "@/shared/config/storybook/TranslationDecorator/TranslationDecorator";
import { SuspenseDecorator } from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "light",
    list: [
      { name: "light", class: Theme.LIGHT, color: "#ffffff" },
      { name: "dark", class: Theme.DARK, color: "#000000" },
      { name: "orange", class: Theme.ORANGE, color: "#ffb005" },
    ],
  },
  layout: "fullscreen",
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(TranslationDecorator);
addDecorator(SuspenseDecorator);
