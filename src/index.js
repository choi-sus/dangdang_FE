import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/configStore";
import { Provider } from "react-redux";

import ReactPWAInstallProvider from "react-pwa-install";

// -- serviceWorker --
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// -- components --
import Device from "./shared/Device";

ReactDOM.render(
  <React.StrictMode>
    <ReactPWAInstallProvider enableLogging>
      <Provider store={store}>
        <Device>
          <App />
        </Device>
      </Provider>
    </ReactPWAInstallProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();