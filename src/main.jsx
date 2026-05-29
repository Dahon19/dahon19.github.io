const productionStylesheet = "/Portfolio/assets/app-tbX9c1tD.css?v=20260529-cert-credential-text";
const productionEntry = "/Portfolio/assets/app-BSAudauK.js?v=20260529-cert-credential-text";

if (!document.querySelector(`link[href^="${productionStylesheet.split("?")[0]}"]`)) {
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = productionStylesheet;
  document.head.appendChild(stylesheet);
}

import(productionEntry);
