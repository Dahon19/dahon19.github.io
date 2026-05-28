const productionStylesheet = "/Portfolio/assets/app-DvdFMFS0.css?v=20260528-contrast";
const productionEntry = "/Portfolio/assets/app-DzWHnpyC.js?v=20260528-contrast";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
