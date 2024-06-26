import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import App from "./components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from "./redux/store"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
     <PersistGate loading="loading page..." persistor={persistor} >
       <BrowserRouter>
         <App />
       </BrowserRouter>
     </PersistGate>
    </Provider>
  </React.StrictMode>
);
