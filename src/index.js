import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import 'antd/dist/antd.css';
=======
import "antd/dist/antd.css";
>>>>>>> 6d6aa202e71895d47dfe6f16db56548337bf7196
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
import { store, history } from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
