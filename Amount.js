"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.amount = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
async function amount() {
    const inquireAmount = [
        {
            type: "number",
            name: "Amount",
            message: "Enter The amount you want to convert",
        }
    ];
    const answers = await inquirer_1.default.prompt(inquireAmount);
    const amountToBeConverted = answers.Amount;
    return amountToBeConverted;
}
exports.amount = amount;
