const productionStylesheet = "/Portfolio/assets/app-DJq_sOFV.css?v=20260529-certs";
const productionEntry = "/Portfolio/assets/app-BfB02xYp.js?v=20260529-certs-full";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
