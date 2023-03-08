import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/global.css";

import { ThemeProvider } from "@mui/material";
import { THEME } from "./themes/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
