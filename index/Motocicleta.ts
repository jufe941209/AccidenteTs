import { Motorizado } from "./Motorizado.js";
import { Persona } from "./Persona.js";
import { Vehiculo } from "./Vehiculo.js";

export class Motocicleta extends Motorizado implements Vehiculo {
  // Attributes
  cilindraje: number;

  // Constructor
  constructor(cilindraje: number, placa: string, velocidadMax: number, marca: string, color: string, modelo: string, ruedas: number, propietario: Persona) {
    super(placa, velocidadMax, marca, color, modelo, ruedas, propietario);
    this.cilindraje = cilindraje;
  }
}