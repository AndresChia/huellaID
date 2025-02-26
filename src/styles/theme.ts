export const theme = {
  colors: {
    primary: {
      DEFAULT: "#634AFF",
      light: "#EFEDFF",
      dark: "#4A35CC",
    },
    dark: {
      DEFAULT: "#242424",
      light: "#363636",
      lighter: "#484848",
    },
    pet: {
      brown: "#A67C52",
      beige: "#F5E6D3",
      sage: "#A8C7B5",
      coral: "#FF8D7E",
    },
    success: {
      DEFAULT: "#4CAF50",
      light: "#81C784",
      dark: "#388E3C",
    },
    warning: {
      DEFAULT: "#FFA726",
      light: "#FFB74D",
      dark: "#EF6C00",
      info: "#29B6F6",
    },
    alert: {
      DEFAULT: "#EF5350",
      light: "#FF8A87",
      dark: "#B63D3B",
    },
    spacing: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },
    borderRadius: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      full: "9999px",
    },
    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
  },
};

export type Theme = typeof theme;
