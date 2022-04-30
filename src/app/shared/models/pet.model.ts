export class Pet {
    name: String;
    dateOfBirth: Date;
    breed: String;

    constructor(name: String = '', dateOfBirth: Date = new Date(), breed: String = '') {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.breed = breed;
    }

}
