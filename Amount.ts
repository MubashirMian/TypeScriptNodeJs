import inquirer from "inquirer"
import { convertor } from "./convertor";

export async function amount(): Promise<number> {
    const inquireAmount = [
        {
            type: "number",
            name: "Amount",
            message: "Enter The amount you want to convert",
        }
    ];

    const answers = await inquirer.prompt(inquireAmount);
    const amountToBeConverted = answers.Amount;
    return amountToBeConverted;
}