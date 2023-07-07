import { Motorizado } from "./Motorizado.js";
export class Motocicleta extends Motorizado {
    // Constructor
    constructor(cilindraje, placa, velocidadMax, marca, color, modelo, ruedas, propietario) {
        super(placa, velocidadMax, marca, color, modelo, ruedas, propietario);
        this.cilindraje = cilindraje;
    }
}
