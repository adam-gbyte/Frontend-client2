import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import global styles
import "./style/normalize.css";
import "./style/style.css";
import "./style/utility.css";
import "./style/responsive.css";
// import './style/App.css';
// import './index.css';

// Import font
import "./fonts/fonts.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
