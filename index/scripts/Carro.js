import { Motorizado } from "./Motorizado.js";
export class Carro extends Motorizado {
    // Constructor
    constructor(asientos, placa, velocidadMax, marca, color, modelo, ruedas, propietario) {
        super(placa, velocidadMax, marca, color, modelo, ruedas, propietario);
        this.asientos = asientos;
    }
}
