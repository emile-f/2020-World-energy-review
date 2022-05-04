import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@emile-f/project-world-energy-trends.js?v=3";

window.addEventListener("load", () => {
    new Runtime().module(define, name => {
        if (name === "viewof oilType") return new Inspector(document.querySelector("#observablehq-viewof-oilType-e55ee2d5"));
        if (name === "graphChart") return new Inspector(document.querySelector("#observablehq-graphChart-e55ee2d5"));
        return ["graphData"].includes(name);
    });
});
