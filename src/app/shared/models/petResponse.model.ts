import { Pet } from "./pet.model";

export class PetResponse {
    datos: Array<Pet>;

    constructor(datos: Array<Pet>) {
        this.datos = datos;
    }

}