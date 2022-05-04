import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@emile-f/project-world-energy-trends.js?v=3";

window.addEventListener("load", () => {
    new Runtime().module(define, name => {
        if (name === "chartWorld") return new Inspector(document.querySelector("#observablehq-chartWorld-06f59db3"));
        if (name === "viewof typeTruncation") return new Inspector(document.querySelector("#observablehq-viewof-typeTruncation-67492539"));
        return ["dataForBarChart", "barChartFilter", "worldData", "chartWorld", "countryData", "chart"].includes(name);
    });
});