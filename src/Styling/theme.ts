import { extendTheme } from "@chakra-ui/react";
import { foundations } from "./foundations";

const direction = "ltr";

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
  cssVarPrefix: "chakra",
};

export const theme = extendTheme({
  ...foundations,
  direction,
  config,
  styles: {
    global: () => ({
      ".js-focus-visible :focus:not(.focus-visible), .js-focus-visible :focus:not(.focus-visible) + [data-focus]":
        { outline: "none", shadow: "none" },
      // "html, body": {
      //   backgroundColor: foundations.colors.jsconfBlack,
      //   color: foundations.colors.white,
      // },
    }),
  },
});
