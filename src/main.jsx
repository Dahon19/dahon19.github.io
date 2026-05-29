const productionStylesheet = "/Portfolio/assets/app-DbEsZ1T-.css?v=20260529-full-ui-optimization";
const productionEntry = "/Portfolio/assets/app-Hzb9I45D.js?v=20260529-full-ui-optimization";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
