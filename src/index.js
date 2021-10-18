import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const state = Store();

ReactDOM.render(
  <Provider store={state}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
