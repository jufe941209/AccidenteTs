import { Vehiculo } from "./Vehiculo.js";
import { LicenciaConduccion } from "./LicenciaConduccion.js";

export class Persona {
  // Attributes
  nombre: string;
  cedula: string;
  telefono: string;
  edad: number;
  vehiculos: Vehiculo[];
  licencia?: LicenciaConduccion;

  // Constructor
  constructor(nombre: string, cedula: string, telefono: string, edad: number, licencia?: LicenciaConduccion) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.telefono = telefono;
    this.edad = edad;
    this.vehiculos = [];
    this.licencia = licencia;
  }
}