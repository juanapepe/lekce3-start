export default class Animal {

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run() {
        console.log(`${this.name} běží rychlostí ${this.speed} km/h.`);
    }
}