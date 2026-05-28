const productionStylesheet = "/Portfolio/assets/index-wPSjIuRx.css?v=20260528-ui";
const productionEntry = "/Portfolio/assets/index-BPl7I4g-.js?v=20260528-ui";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
