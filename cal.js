"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function main() {
    let operationChoices = ['Add', 'Subtract', 'Multiply', 'Divide'];
    inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: operationChoices,
        },
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Please enter a valid number',
        },
    ]).then((answers) => {
        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);
        let result;
        switch (answers.operation) {
            case 'Add':
                result = num1 + num2;
                break;
            case 'Subtract':
                result = num1 - num2;
                break;
            case 'Multiply':
                result = num1 * num2;
                break;
            case 'Divide':
                if (num2 === 0) {
                    console.log('Error: Cannot divide by zero');
                    return;
                }
                result = num1 / num2;
                break;
            default:
                console.log('Invalid operation');
                return;
        }
        console.log(`Result: ${result}`);
    });
}
main();
