import { render } from "react-dom";
import "./css/root.scss";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import ThemeProvider from "./theme/ThemeProvider";

const nodeWrapper = document.getElementById("root");

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  nodeWrapper
);
