import { Vehiculo } from "./Vehiculo.js";
import { Persona } from "./Persona.js";

export class Bicicleta extends Vehiculo {
  // Attributes
  tipo: "Urbana" | "Deportiva";
  luces: boolean;

  // Constructor
  constructor(tipo: "Urbana" | "Deportiva", luces: boolean, marca: string, color: string, modelo: string, ruedas: number, propietario: Persona) {
    super(marca, color, modelo, ruedas, propietario);
    this.tipo = tipo;
    this.luces = luces;
  }
}