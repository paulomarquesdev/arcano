import React from "react";
import { AppRouter } from "./routes";
import { GlobalStyle } from "./styles/global";


export function App() {
    return (
        <>
            <GlobalStyle />
            <AppRouter />
        </>
    );
};
