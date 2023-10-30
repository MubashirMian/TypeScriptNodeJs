import inquirer from 'inquirer';

class Person {
    private personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    public askQuestion(input: number) 
    {
        if (input === 1) 
        {
            this.personality = "Extravert";
        } else if (input === 2)
        {
            this.personality = "Introvert";
        } else
        {
            console.log("Please enter from the available options");
           

        }
    }

    public GetPersonality(): string 
    {
        return this.personality;
    }
}

export default Person;
