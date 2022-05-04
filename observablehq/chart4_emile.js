import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@emile-f/project-world-energy-trends.js?v=3";

window.addEventListener("load", () => {
    new Runtime().module(define, name => {
        if (name === "barChartFilter") return new Inspector(document.querySelector("#observablehq-barChartFilter-298cd6e0"));
    });
});
