import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@emile-f/project-world-energy-trends@2210.js?v=3";
window.addEventListener("load", function () {
  new Runtime().module(define, name => {
    if (name === "viewof countryselect") return new Inspector(document.querySelector("#observablehq-viewof-countryselect-e4a57d1b"));
    if (name === "viewof normalize2") return new Inspector(document.querySelector("#observablehq-viewof-normalize2-e4a57d1b"));
    if (name === "sackey2") return new Inspector(document.querySelector("#observablehq-sackey2-e4a57d1b"));
    if (name === "sac_country") return new Inspector(document.querySelector("#observablehq-sac_country-e4a57d1b"));
    if (name === "line2") return new Inspector(document.querySelector("#observablehq-line2-e4a57d1b"));
  });
});
