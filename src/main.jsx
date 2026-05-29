const productionStylesheet = "/Portfolio/assets/app-LK5lYtIG.css?v=20260529-equal-skills";
const productionEntry = "/Portfolio/assets/app-BaA7l0YA.js?v=20260529-equal-skills";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
