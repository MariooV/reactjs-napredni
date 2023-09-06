import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CarsProvider } from "./storage/CarsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CarsProvider>
        <App />
      </CarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
{
  /* <CarsContext.Provider value={{ cars: [1, 2, 3, 4] }}>
  <App/<
</CarsContext.Provider> */
}
