import { createTheme } from "@mui/material";

export const THEME = createTheme({
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    fontWeight: 600,
                },
            },
            styleOverrides: {
                contained: {
                    backgroundColor: "#6246EA",
                    ":hover": {
                        backgroundColor: "#765eed",
                    }
                },
                text: {
                    color: "#6246EA",
                    ":hover": {
                        color: "#765eed",
                        backgroundColor: "rgba(118, 94, 237, 0.04)",
                    }
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: "#E45858",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    lineHeight: 1.6,
                    marginBottom: "1.125rem",
                },
                h2: {
                    fontSize: "3rem",
                    marginBottom: "2.5rem",
                    fontWeight: "bold",
                },
                h3: {
                    fontSize: "2rem",
                    fontWeight: "bold",
                },
                subtitle1: {
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                },
                caption: {
                    fontSize: "0.8rem",
                    color: "rgba(0, 0, 0, 0.6)",
                }
            }
        }
    }
})