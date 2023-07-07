import { Vehiculo } from "./Vehiculo.js";
import { Persona } from "./Persona.js";

export class Motorizado extends Vehiculo {
  // Attributes
  placa: string;
  velocidadMaxima: number;

  // Constructor
  constructor(placa: string, velocidadMaxima: number, marca: string, color: string, modelo: string, ruedas: number, propietario: Persona) {
    super(marca, color, modelo, ruedas, propietario);
    this.placa = placa;
    this.velocidadMaxima = velocidadMaxima;
  }
}