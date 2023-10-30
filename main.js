import inquirer from 'inquirer';
import { add } from './add.js';
import { sub } from './sub.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';
async function LetsDoCal() {
    const operations = ['+', '-', '*', '/'];
    const AskChoice = [
        {
            type: 'list',
            name: 'choice',
            message: 'Choose the operation',
            choices: operations,
        },
    ];
    const Answer = await inquirer.prompt(AskChoice);
    const Chosen = Answer.choice;
    const LetInput = [
        {
            type: 'number',
            name: 'numOne',
            message: 'Enter the first number',
        },
        {
            type: 'number',
            name: 'numTwo',
            message: 'Enter the second number',
        },
    ];
    const NumbersAnswer = await inquirer.prompt(LetInput);
    const NumOne = NumbersAnswer.numOne;
    const NumTwo = NumbersAnswer.numTwo;
    let result;
    if (Chosen === operations[0]) {
        result = add(NumOne, NumTwo);
    }
    else if (Chosen === operations[1]) {
        result = sub(NumOne, NumTwo);
    }
    else if (Chosen === operations[2]) {
        result = multiply(NumOne, NumTwo);
    }
    else {
        result = divide(NumOne, NumTwo);
    }
    console.log(`Result: ${result}`);
    ContineOrNo();
}
async function ContineOrNo() {
    const furtherContinue = [
        {
            type: 'confirm',
            name: 'value',
            message: 'If you want to proceed to the next calculation, press Y; otherwise, press N',
            default: false,
        },
    ];
    const decision = await inquirer.prompt(furtherContinue);
    const answer = decision.value;
    if (answer) {
        LetsDoCal();
    }
    else {
        console.log('Goodbye!');
    }
}
LetsDoCal();
