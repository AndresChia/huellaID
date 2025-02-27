"use client";

import { ThemeProvider } from "@mui/material/styles";
import { muiTheme } from "@/styles/mui-theme";

export default function MUIThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
