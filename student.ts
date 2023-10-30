import Person from "./person.js"; 
class Student extends Person {
    private _name: string;

    constructor() {
        super(); 
        this._name = " ";
    }

    public get Name(): string {
        return this._name;
    }

    public set Name(value: string) {
        this._name = value;
    }
}
export default Student