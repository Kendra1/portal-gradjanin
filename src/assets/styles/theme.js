import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: { main: "#2f3234" },
    secondary: { main: "#00aaff" },
    error: { main: "#b30000" },
  },
  spacing: 16,
  overrides: {
    MuiInputLabel: {
      root: {
        color: "#6b6c6c",
      },
    },
    MuiInputBase: {
      input: {
        color: "#6b6c6c",
      },
    },
    MuiContainer: {
      root: {
        padding: "0 !important",
        margin: "0 !important",
      },
    },
    MuiFormControl: {
      root: {
        margin: "0.5rem",
      },
    },
    MuiButton: {
      root: {
        width: "100%",
        marginBottom: "0.5rem",
      },
    },
    MuiTypography: {
      root: {
        textAlign: "center",
      },
    },
  },
});

export const inputFieldProps = {
  disableUnderline: true,
};

export const iconProps = {
  color: "#505252",
  paddingBottom: theme.spacing(0.25),
  marginRight: theme.spacing(0.25),
};
