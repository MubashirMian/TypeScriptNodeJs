#! /usr/bin/env node
import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";
class Customer {
    constructor(f, l, g, age, contact, acc) {
        this.FirstName = f;
        this.LastName = l;
        this.Gender = g;
        this.Age = age;
        this.MobileNumber = contact;
        this.AccountNumber = acc;
    }
}
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addcustomer(object) {
        this.customer.push(object);
    }
    addaccount(object) {
        this.account.push(object);
    }
    transaction(object) {
        let newAccounts = this.account.filter((acc) => {
            acc.accNumber !== object.accNumber;
        });
        this.account = [...newAccounts, object];
    }
}
let bank = new Bank();
console.log(bank);
for (let i = 1; i < 4; i++) {
    let f = faker.person.firstName("male");
    let l = faker.person.lastName();
    let contact = parseInt(faker.phone.number("##########"));
    const customer = new Customer(f, l, "male", 30 + 2 * i, contact, 1000 + i);
    bank.addcustomer(customer);
    bank.addaccount({ accNumber: customer.AccountNumber, balance: 50 * i + 1 });
}
async function bankService(bank) {
    let Continue = true;
    do {
        let service = await inquirer.prompt({
            name: "choice",
            type: "list",
            message: "Kindly select a functionality",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"],
        });
        if (service.choice === "View Balance") {
            let response = await inquirer.prompt({
                type: "input",
                name: "answer",
                message: "Kindly enter your account number",
            });
            let account = bank.account.find((acc) => acc.accNumber == response.answer);
            if (!account) {
                console.log(chalk.redBright.bold("Invalid Account Number"));
            }
            else {
                let name = bank.customer.find((item) => {
                    item.AccountNumber == account?.accNumber;
                });
                console.log("Your account balance is ", chalk.greenBright.italic("$", account.balance));
            }
        }
        else if (service.choice === "Cash Withdraw") {
            let response = await inquirer.prompt({
                type: "input",
                name: "answer",
                message: "Kindly enter your account number",
            });
            let account = bank.account.find((acc) => acc.accNumber == response.answer);
            if (!account) {
                console.log(chalk.redBright.bold("Invalid Account Number"));
            }
            else {
                let answers = await inquirer.prompt({
                    type: "input",
                    name: "answer",
                    message: "Enter your amount",
                });
                if (account.balance > answers.answer) {
                    let newBalance = account.balance - answers.answer;
                    bank.transaction({
                        accNumber: account.accNumber,
                        balance: newBalance,
                    });
                }
                else {
                    console.log("Insufficient balance");
                }
            }
        }
        else if (service.choice === "Cash Deposit") {
            let response = await inquirer.prompt({
                type: "input",
                name: "answer",
                message: "Kindly enter your account number",
            });
            let account = bank.account.find((acc) => acc.accNumber == response.answer);
            if (!account) {
                console.log(chalk.redBright.bold("Invalid Account Number"));
            }
            else {
                let answers = await inquirer.prompt({
                    type: "input",
                    name: "answer",
                    message: "Enter your amount",
                });
                let newBalance = account.balance + parseFloat(answers.answer);
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
        else {
            console.log("Program Exit successful");
            break;
        }
    } while (Continue);
}
bankService(bank);
