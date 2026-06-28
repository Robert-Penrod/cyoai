import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
    primaryColor: "main",
    colors: {
        main: [
            "#d8ebee", // Main BG
            "#5FCCDB",
            "#44CADC",
            "#2AC9DE",
            "#1AC2D9",
            "#11B7CD",
            "#629aa1", // Button
            "#0E99AC",
            "#3c4e52", // Navbar
            "#041a1d", // Header
        ],
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </StrictMode>,
);
