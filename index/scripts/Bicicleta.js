import { Vehiculo } from "./Vehiculo.js";
export class Bicicleta extends Vehiculo {
    // Constructor
    constructor(tipo, luces, marca, color, modelo, ruedas, propietario) {
        super(marca, color, modelo, ruedas, propietario);
        this.tipo = tipo;
        this.luces = luces;
    }
}
