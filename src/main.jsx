import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const theme = extendTheme({
  colors: {
    dark: "var(--dark)",
    neutral: {
      50: "var(--neutral-50)",
      100: "var(--neutral-100)",
      200: "var(--neutral-200)",
      300: "var(--neutral-300)",
      400: "var(--neutral-400)",
      500: "var(--neutral-500)",
      600: "var(--neutral-600)",
      700: "var(--neutral-700)",
      800: "var(--neutral-800)",
      900: "var(--neutral-900)",
    },
    primary: {
      50: "var(--primary-color50)",
      100: "var(--primary-color100)",
      200: "var(--primary-color200)",
      300: "var(--primary-color300)",
      400: "var(--primary-color400)",
      500: "var(--primary-color500)",
      600: "var(--primary-color600)",
      700: "var(--primary-color700)",
      800: "var(--primary-color800)",
      900: "var(--primary-color900)",
    },
    variation: {
      50: "var(--variation-50)",
      100: "var(--variation-100)",
      200: "var(--variation-200)",
      300: "var(--variation-300)",
      400: "var(--variation-400)",
      500: "var(--variation-500)",
      600: "var(--variation-600)",
      700: "var(--variation-700)",
      800: "var(--variation-800)",
      900: "var(--variation-900)",
    },
    white: "var(--white)",
  },
  fonts: {
    body: "var(--LARGE-BODY-font-family)",
    heading: "var(--LARGE-HEADING-font-family)",
    mono: "var(--LARGE-BODY-BOLD-font-family)", // You can use more font variables as needed
  },
  fontSizes: {
    xs: "var(--SMALL-BODY-font-size)",
    sm: "var(--MEDIUM-BODY-font-size)",
    md: "var(--LARGE-BODY-font-size)",
    lg: "var(--LARGE-HEADING-font-size)",
    xl: "var(--LARGE-DISPLAY-font-size)",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
    medium: 500,
  },
  lineHeights: {
    normal: "var(--LARGE-BODY-line-height)",
    short: "var(--MEDIUM-HEADING-line-height)",
    tall: "var(--LARGE-DISPLAY-line-height)",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
