import { Vehiculo } from "./Vehiculo.js";
export class Motorizado extends Vehiculo {
    // Constructor
    constructor(placa, velocidadMaxima, marca, color, modelo, ruedas, propietario) {
        super(marca, color, modelo, ruedas, propietario);
        this.placa = placa;
        this.velocidadMaxima = velocidadMaxima;
    }
}
