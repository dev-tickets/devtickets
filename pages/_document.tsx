import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { theme } from "../src/Styling/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
            storageKey="__DEV_TICKETS_THEME__"
            type="localStorage"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
