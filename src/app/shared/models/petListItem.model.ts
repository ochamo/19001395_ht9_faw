export class PetListItemModel {
    name: String;
    dateOfBirth: String;
    breed: String;

    constructor(name: String = '', dateOfBirth: String = '', breed: String = '') {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.breed = breed;
    }
}