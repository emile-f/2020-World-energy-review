import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@emile-f/project-world-energy-trends@2210.js?v=3";
window.addEventListener("load", function () {
  new Runtime().module(define, name => {
    if (name === "viewof mapsource") return new Inspector(document.querySelector("#observablehq-viewof-mapsource-e4a57d1b"));
    if (name === "viewof viewpct") return new Inspector(document.querySelector("#observablehq-viewof-viewpct-e4a57d1b"));
    if (name === "key1") return new Inspector(document.querySelector("#observablehq-key1-e4a57d1b"));
    if (name === "consumptionmap") return new Inspector(document.querySelector("#observablehq-consumptionmap-e4a57d1b"));
    if (name === "viewof mapyear") return new Inspector(document.querySelector("#observablehq-viewof-mapyear-e4a57d1b"));
  });
});
