import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/d/3824de9a154ffda0.js?v=3";
window.addEventListener("load", function () {
    new Runtime().module(define, name => {
        if (name === "viewof typeTruncation") return new Inspector(document.querySelector("#observablehq-viewof-typeTruncation-631ddba6"));
        return ["dataForBarChart", "barChartFilter", "worldData", "chartWorld", "countryData", "chart"].includes(name);
    });

    new Runtime().module(define, name => {
        if (name === "chartWorld") return new Inspector(document.querySelector("#observablehq-chartWorld-0d79b21c"));
    });
});


