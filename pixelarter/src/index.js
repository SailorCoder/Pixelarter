import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import App from "./components/App";
import { PainterProvider } from "./contexts/PainterContext";

ReactDOM.render(
  <PainterProvider>
    <App />
  </PainterProvider>,
  document.getElementById("root")
);
