import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';

// -- redux --
import store from "./redux/configStore";
import { Provider } from "react-redux";

// -- serviceWorker --
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from './reportWebVitals';

// -- PWA --
import ReactPWAInstallProvider from "react-pwa-install";

// -- style --
import GlobalStyle from "./static/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./shared/theme";
import "./index.css";

// -- components --
import Device from "./shared/Device"; 

ReactDOM.render(
  <React.StrictMode>
    <ReactPWAInstallProvider enableLogging>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Device>
            <App />
          </Device>
        </ThemeProvider>
      </Provider>
    </ReactPWAInstallProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();