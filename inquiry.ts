import inquirer from 'inquirer';
export function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




export function Toinquire(range : string, randomNumber : number){
    const guessNumb = [
        {
            type: 'number',
            name: 'num',
            message: `Enter a number from ${range} \n`,
        },
    ];
    inquirer.prompt(guessNumb).then(answers => {
        const guessedNumber = answers.num; 
    
        console.log('Your Guess:', guessedNumber);
    
        if (guessedNumber == randomNumber)
        {
            console.log('You are a genius! The number is correct.');
        } 
        else 
        {
            console.log('Sorry, your guess is incorrect.');
        }
    });
    
    
}