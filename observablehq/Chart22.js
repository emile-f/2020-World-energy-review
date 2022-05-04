import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@emile-f/project-world-energy-trends@2210.js?v=3";
window.addEventListener("load", function () {
  new Runtime().module(define, name => {
    if (name === "bc") return new Inspector(document.querySelector("#observablehq-bc-26d76aa5"));
    if (name === "viewof no_countries2") return new Inspector(document.querySelector("#observablehq-viewof-no_countries2-26d76aa5"));
    if (name === "bcr") return new Inspector(document.querySelector("#observablehq-bcr-26d76aa5"));
    if (name === "viewof baryear2") return new Inspector(document.querySelector("#observablehq-viewof-baryear2-26d76aa5"));
    if (name === "viewof barsource") return new Inspector(document.querySelector("#observablehq-viewof-barsource-26d76aa5"));
  });
});
