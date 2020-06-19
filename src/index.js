import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import state from "./redux/store";
import App from "./App";

ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.getElementById("root")
);
