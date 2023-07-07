import { Persona } from "./Persona.js";

export class LicenciaConduccion {
  // Attributes
  tipoLicencia: string;
  fechaExpedicion: Date;
  vigencia: Date;
  propietario: Persona;

  // Constructor
  constructor(tipoLicencia: string, fechaExpedicion: Date, vigencia: Date, propietario: Persona) {
    this.tipoLicencia = tipoLicencia;
    this.fechaExpedicion = fechaExpedicion;
    this.vigencia = vigencia;
    this.propietario = propietario;
  }
}