
import { Accidente } from "./Accidente.js";
import { Persona } from "./Persona.js";

export class Vehiculo {
  // Attributes
  marca: string;
  color: string;
  modelo: string;
  ruedas: number;
  reportes: Accidente[];
  propietario: Persona;

  // Constructor
  constructor(marca: string, color: string, modelo: string, ruedas: number, propietario: Persona) {
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.ruedas = ruedas;
    this.reportes = [];
    this.propietario = propietario;
  }
}