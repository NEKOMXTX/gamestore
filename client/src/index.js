import React, {createContext} from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserStore from "./store/UserStore";

import App from "./App";

export const Context = createContext(null)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Context.Provider value={{
        user: new UserStore()
    }}>
        <App />
    </Context.Provider>,
  </StrictMode>
);