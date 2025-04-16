import { createRoot } from "react-dom/client";
import App from "./view/App.jsx";
import "../src/index.css";
import { Provider } from "react-redux";
import counterStore from "./store/counterStore.js";
import Formstore from "./store/FormStore.js";

createRoot(document.getElementById("root")).render(
  <Provider store={Formstore}>
    <App />
  </Provider>
);
