#! /user/bin/env.node
import inquirer from "inquirer";
import { sum } from "./opera.js";
import { sub } from "./subt.js";
import { mul } from "./multi.js";
import { div } from "./divid.js";
let answer = await inquirer.prompt([
    { message: "enter your first number",
        type: "number",
        name: "num1"
    },
    {
        message: "enter your second number",
        type: "number",
        name: "num2"
    },
    {
        message: "select operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    }
]);
console.log(answer);
if (answer.operator === "+") {
    let result = sum(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operator === "-") {
    let result = sub(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operator === "*") {
    let result = mul(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operator === "/") {
    let result = div(answer.num1, answer.num2);
    console.log(result);
}
else {
    console.log("invalid result");
}
