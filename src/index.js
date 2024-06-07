import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.css";

// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import { CssBaseline } from "@mui/material";

const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);

container.render(
  <React.StrictMode>
    {/* <CssBaseline enableColorScheme> */}
    <App />
    {/* </CssBaseline> */}
  </React.StrictMode>
);
