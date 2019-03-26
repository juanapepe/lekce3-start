export default class Person {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return `${this.name} ${this.surname}`; //getter
    }

    set fullName(newName) { //setter
        let names = newName.split(' ');
        this.name = names[0];
        this.surname = names[1];
    }

    greet() {
        console.log(`Čau, jmenuji se ${this.name} ${this.surname}`);
    }
}