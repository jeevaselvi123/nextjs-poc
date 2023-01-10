import "../styles/globals.css";
import type { AppProps } from "next/app";
import { darkTheme, lightTheme } from "./theme/themes";

import {
  ThemeProvider,
  CssBaseline,
  Switch,
  FormControlLabel,
  Container,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  let [useDarkTheme, setUseDarkTheme] = useState(false);
  let [theme, setTheme] = useState(useDarkTheme ? darkTheme : lightTheme);

  const changeThemeHandler = (target: ChangeEvent, currentValue: boolean) => {
    setUseDarkTheme(currentValue);
    setTheme(currentValue ? darkTheme : lightTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <FormControlLabel
          control={
            <Switch
              checked={useDarkTheme}
              inputProps={{ "aria-label": "Dark Mode" }}
              onChange={(target, value) => changeThemeHandler(target, value)}
            ></Switch>
          }
          label="Dark Mode"
          labelPlacement="start"
        />
        <Container fixed>
          <Component {...pageProps} ></Component>
        </Container>
      </ThemeProvider>
    </>
  );
}
