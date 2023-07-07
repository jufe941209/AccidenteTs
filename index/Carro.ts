import { Motorizado } from "./Motorizado.js";
import { Persona } from "./Persona.js";
import { Vehiculo } from "./Vehiculo.js";

export class Carro extends Motorizado implements Vehiculo {
  // Attributes
  asientos: number;

  // Constructor
  constructor(asientos: number, placa: string, velocidadMax: number, marca: string, color: string, modelo: string, ruedas: number, propietario: Persona) {
    super(placa, velocidadMax, marca, color, modelo, ruedas, propietario);
    this.asientos = asientos;
  }
}