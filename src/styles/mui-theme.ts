import { createTheme } from "@mui/material/styles";
import { theme as customTheme } from "./theme";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: customTheme.colors.primary.DEFAULT,
      light: customTheme.colors.primary.light,
      dark: customTheme.colors.primary.dark,
    },
    secondary: {
      main: customTheme.colors.secondary.DEFAULT,
      light: customTheme.colors.secondary.light,
      dark: customTheme.colors.secondary.dark,
    },
    error: {
      main: customTheme.colors.alert.DEFAULT,
      light: customTheme.colors.alert.light,
      dark: customTheme.colors.alert.dark,
    },
    warning: {
      main: customTheme.colors.warning.DEFAULT,
      light: customTheme.colors.warning.light,
      dark: customTheme.colors.warning.dark,
    },
    info: {
      main: customTheme.colors.info.DEFAULT,
      light: customTheme.colors.info.light,
      dark: customTheme.colors.info.dark,
    },
    success: {
      main: customTheme.colors.success.DEFAULT,
      light: customTheme.colors.success.light,
      dark: customTheme.colors.success.dark,
    },
  },
  shape: {
    borderRadius:
      parseInt(customTheme.colors.borderRadius.md.replace("rem", "")) * 16,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  shadows: [
    "none",
    customTheme.colors.shadows.sm,
    customTheme.colors.shadows.md,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
    customTheme.colors.shadows.lg,
  ],
});

export default muiTheme;
