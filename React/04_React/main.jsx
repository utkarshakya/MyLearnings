import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./src/Global/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
