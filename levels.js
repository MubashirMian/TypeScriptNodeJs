import inquirer from 'inquirer';
import { Toinquire, getRandomNumber } from './inquiry.js';
const levels = [
    'Easy',
    'Medium',
    'Hard'
];
const selectLevelPrompt = [
    {
        type: 'list',
        name: 'LvlOfDiff',
        message: 'Select the level difficulty you prefer\n',
        choices: levels
    }
];
inquirer.prompt(selectLevelPrompt).then(answers => {
    const criteria = answers.LvlOfDiff;
    console.log('Selected Level:', criteria);
    if (criteria == levels[0]) {
        console.log(getRandomNumber(1, 10));
        Toinquire("1-10");
    }
    else if (criteria == levels[1]) {
        console.log(getRandomNumber(1, 100));
        Toinquire("1-100");
    }
    else {
        console.log(getRandomNumber(1, 1000));
        Toinquire("1-1000");
    }
});
