import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/d/3824de9a154ffda0@2089.js?v=3";
new Runtime().module(define, name => {
  if (name === "viewof normalize1") return new Inspector(document.querySelector("#observablehq-viewof-normalize1-e4a57d1b"));
  if (name === "sackey1") return new Inspector(document.querySelector("#observablehq-sackey1-e4a57d1b"));
  if (name === "sac_world") return new Inspector(document.querySelector("#observablehq-sac_world-e4a57d1b"));
  if (name === "line1") return new Inspector(document.querySelector("#observablehq-line1-e4a57d1b"));
});
