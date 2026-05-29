const productionStylesheet = "/Portfolio/assets/app-tbX9c1tD.css?v=20260529-webinar-rescan";
const productionEntry = "/Portfolio/assets/app-BMVVgslw.js?v=20260529-webinar-rescan";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
