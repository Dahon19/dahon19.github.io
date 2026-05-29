const productionStylesheet = "/Portfolio/assets/app-s7ug98EG.css?v=20260529-certs-clean";
const productionEntry = "/Portfolio/assets/app-d_jPIQjV.js?v=20260529-certs-clean";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
