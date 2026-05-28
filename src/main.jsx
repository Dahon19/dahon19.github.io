const productionStylesheet = "/Portfolio/assets/app-C7g1a-Eb.css?v=20260528-modern";
const productionEntry = "/Portfolio/assets/app-Dc-DvTgb.js?v=20260528-modern";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
