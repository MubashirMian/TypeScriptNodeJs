import Person from "./person.js";
class Student extends Person {
    constructor() {
        super();
        this._name = " ";
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
export default Student;
