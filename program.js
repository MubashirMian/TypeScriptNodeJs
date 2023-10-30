import inquirer from "inquirer";
import Person from "./person.js";
import Student from "./student.js";
class Program {
    //constructor(){}
    main() {
        const Userpreference = [
            {
                type: 'input',
                name: 'userChoice',
                message: 'Type 1 if you like to talk with other people else 2 if you prefer keeping it to yourself',
            },
            {
                type: 'input',
                name: 'userName',
                message: 'What is your name ?\n ',
            },
        ];
        function replied() {
            inquirer.prompt(Userpreference).then(answer => {
                try {
                    const HasSelected = parseInt(answer.userChoice);
                    if (isNaN(HasSelected)) {
                        replied();
                        throw new Error("Enter a number!");
                    }
                    const YourName = answer.userName;
                    const MyPerson = new Person();
                    MyPerson.askQuestion(HasSelected);
                    const MyStudent = new Student;
                    MyStudent.Name = YourName;
                    console.log(`You are ${MyStudent.Name} having a personality ${MyPerson.GetPersonality()} `);
                }
                catch (error) {
                    console.log(error.message);
                }
            });
        }
        replied();
    }
}
const RunProgram = new Program;
const RunMain = RunProgram.main();
export default Program;
