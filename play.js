import inquirer from "inquirer";
//GAME variables
const enemies = ["Skeleton", "Zombie", "Warrior"];
let MaxEnemyHp = 70;
const EnemyDamage = 25;
//PLAYER variables
let health = 70;
const AttackDmg = 40;
let numHealthpotions = 2;
const HealthpotionHealAmount = 30;
let potionDropChance = 50; //percentage of drop chance is 50
let running = true;
console.log("---------------------------------------------------------------------------------------");
console.log("WELCOME TO THE DUNGEON" + "\n");
GAME: //labelling the outer while loop
 while (running) {
    let enemyhealth = Math.floor(Math.random() * (MaxEnemyHp + 1));
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    console.log("\t#" + enemy + " has appeared!" + "#\n");
    while (enemyhealth > 0) {
        console.log("\tYour HP: " + health);
        console.log("\t" + enemy + "'s HP: " + enemyhealth);
        const answers1 = await inquirer.prompt([
            {
                type: 'list',
                name: 'operations',
                message: '\n\tWhat would you like to do?',
                choices: [
                    '\tAttack',
                    '\tDrink health potion',
                    '\tRun!',
                ],
            },
        ]);
        let operation = answers1.operations;
        if (operation === '\tAttack') {
            let damagedealt = Math.ceil(Math.random() * AttackDmg);
            let damagetaken = Math.ceil(Math.random() * EnemyDamage);
            enemyhealth -= damagedealt;
            health -= damagetaken;
            console.log("\tYou hit " + enemy + " with " + damagedealt + " damage");
            console.log("\tYou recieved " + damagetaken + " damage in return");
            if (health < 1) {
                console.log("You are too weak to continue");
                break;
            }
        }
        else if (operation === '\tDrink health potion') {
            if (numHealthpotions > 0) {
                health += HealthpotionHealAmount;
                numHealthpotions--;
                console.log("\tYour HP has been increased by " + HealthpotionHealAmount);
                console.log("\tNow your HP is " + health);
                console.log("\tYou have " + numHealthpotions + " health potions left");
            }
            else {
                console.log("\tNo potions left.");
                console.log("\tDefeat enemies to get health potions");
            }
        }
        else {
            console.log("\tYou are retreating from " + enemy);
            continue GAME;
        } // outer while loop continue statement
    } // INNER while loop closed
    if (health < 1) {
        console.log("\tYou have been defeated!💀");
        break;
    }
    console.log("\t" + enemy + " was defeated");
    console.log("\tYou have " + health + " HP remaining");
    if (Math.floor(Math.random() * 101) < potionDropChance) {
        numHealthpotions++;
        console.log("\t" + enemy + " dropped a potion");
        console.log("\tYou now have " + numHealthpotions + " health potions");
    }
    const answers2 = await inquirer.prompt([
        {
            type: 'list',
            name: 'operations',
            message: '\n\tWhat would you like to do now?',
            choices: [
                '\tContinue fighting',
                '\tExit',
            ],
        },
    ]);
    let operation2 = answers2.operations;
    if (operation2 === '\tContinue fighting') {
        console.log("\tYou continue on your adventure💪. Goodluck!\n");
    }
    else {
        console.log("\tYou exit the dungeon victorious!🎉");
        console.log("\nTHANKS FOR PLAYING");
        break;
    }
}
console.log("---------------------------------------------------------------------------------------");
