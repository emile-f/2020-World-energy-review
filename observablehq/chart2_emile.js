import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@emile-f/project-world-energy-trends.js?v=3";

window.addEventListener("load", () => {
    new Runtime().module(define, name => {
        if (name === "chart") return new Inspector(document.querySelector("#observablehq-chart-907ebec1"));
        if (name === "viewof selectedCountries") return new Inspector(document.querySelector("#observablehq-viewof-selectedCountries-907ebec1"));
    });
});
