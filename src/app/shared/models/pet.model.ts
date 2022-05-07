export class Pet {
    name: String;
    dateOfBirth: Date;
    breed: String;

    constructor(Name: String = '', DateOfBirth: Date = new Date(), Breed: String = '') {
        this.name = Name;
        this.dateOfBirth = DateOfBirth;
        this.breed = Breed;
    }

}
