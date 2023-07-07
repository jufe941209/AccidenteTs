import { Persona } from "./Persona.js";
import { Vehiculo } from "./Vehiculo.js";

export class Accidente {
  // Attributes
  fecha: Date;
  descripcion: string;
  severidad: number;
  involucrados: Vehiculo[];

  // Constructor
  constructor(
    fecha: Date,
    descripcion: string,
    severidad: number,
    marca: string,
    modelo: string,
    color: string,
    ruedas: number,
    propietario: Persona
  ) {
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.severidad = severidad;
    this.involucrados = [new Vehiculo(marca, modelo, color, ruedas, propietario)];
  }

  // Operations
  agregarVehiculo(marca: string, modelo: string, color: string, ruedas: number, propietario: Persona) {
    this.involucrados.push(new Vehiculo(marca, modelo, color, ruedas, propietario));
  }

  eliminarVehiculo(vehiculo: Vehiculo) {
    const index = this.involucrados.indexOf(vehiculo);
    if (index > -1) {
      this.involucrados.splice(index, 1);
    }
  }

  buscarVehiculo(vehiculo: Vehiculo) {
    const index = this.involucrados.indexOf(vehiculo);
    if (index > -1) {
      console.log(this.involucrados[index]);
    } else {
      console.log("El vehiculo no se encuentra en este accidente");
    }
  }

  listarVehiculos() {
    console.log(this.involucrados);
  }
}