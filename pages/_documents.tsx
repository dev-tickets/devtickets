import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript
            initialColorMode="dark"
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
