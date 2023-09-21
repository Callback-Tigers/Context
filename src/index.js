import React from "react";
import ReactDOM from "react-dom";
import CricketerProvider from "./context/CricketerProvider";
import App from "./App";

ReactDOM.render(
<CricketerProvider>
 <App />
</CricketerProvider>
, 

document.getElementById("root"));