import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import AuthProvider from "./contexts/AuthProvider.tsx";

const theme = createTheme({
    primaryColor: "main",
    colors: {
        main: [
            "#F8F4F0", // Main BG
            "#5FCCDB",
            "#44CADC",
            "#2AC9DE",
            "#1AC2D9",
            "#11B7CD",
            "#626260", // Button
            "#91918e", // Button Highlight
            "#868684", // Navbar
            "#626260", // Header
        ],
    },

    fontSizes: {
        sm: "14px",
        md: "18px",
        lg: "24px",
        xl: "32px",
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </MantineProvider>
    </StrictMode>,
);
