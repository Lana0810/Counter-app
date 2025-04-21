import React from "react";
import ReactDOM from "react-dom/client"; // 👉 dùng "react-dom/client" thay vì "react-dom"
import App from "./App";

// 👉 dùng createRoot (cú pháp React 18)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);