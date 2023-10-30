class Person {
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(input) {
        if (input === 1) {
            this.personality = "Extravert";
        }
        else if (input === 2) {
            this.personality = "Introvert";
        }
        else {
            console.log("Please enter from the available options");
        }
    }
    GetPersonality() {
        return this.personality;
    }
}
export default Person;
