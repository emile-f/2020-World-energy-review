import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@emile-f/project-world-energy-trends@2210.js?v=3";
window.addEventListener("load", function () {
  new Runtime().module(define, name => {
    if (name === "viewof normalizesac") return new Inspector(document.querySelector("#observablehq-viewof-normalizesac-e4a57d1b"));
    if (name === "viewof baryear") return new Inspector(document.querySelector("#observablehq-viewof-baryear-e4a57d1b"));
    if (name === "sbckey_r") return new Inspector(document.querySelector("#observablehq-sbckey_r-e4a57d1b"));
    if (name === "sbc_r") return new Inspector(document.querySelector("#observablehq-sbc_r-e4a57d1b"));
    if (name === "viewof no_countries1") return new Inspector(document.querySelector("#observablehq-viewof-no_countries1-e4a57d1b"));
    if (name === "sbc") return new Inspector(document.querySelector("#observablehq-sbc-e4a57d1b"));
  });
});
