const productionStylesheet = "/Portfolio/assets/app-entry-2pSaNgVX.css?v=20260528-cachefix";
const productionEntry = "/Portfolio/assets/app-entry-Bo7LUriQ.js?v=20260528-cachefix";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
