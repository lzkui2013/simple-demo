import helloWorld from "./helloWorld";

console.log(helloWorld, helloWorld("webpack"));

import("./Dynamic").then((res) => console.log(res));
