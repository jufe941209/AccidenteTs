import { Vehiculo } from "./Vehiculo.js";
export class Accidente {
    // Constructor
    constructor(fecha, descripcion, severidad, marca, modelo, color, ruedas, propietario) {
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.severidad = severidad;
        this.involucrados = [new Vehiculo(marca, modelo, color, ruedas, propietario)];
    }
    // Operations
    agregarVehiculo(marca, modelo, color, ruedas, propietario) {
        this.involucrados.push(new Vehiculo(marca, modelo, color, ruedas, propietario));
    }
    eliminarVehiculo(vehiculo) {
        const index = this.involucrados.indexOf(vehiculo);
        if (index > -1) {
            this.involucrados.splice(index, 1);
        }
    }
    buscarVehiculo(vehiculo) {
        const index = this.involucrados.indexOf(vehiculo);
        if (index > -1) {
            console.log(this.involucrados[index]);
        }
        else {
            console.log("El vehiculo no se encuentra en este accidente");
        }
    }
    listarVehiculos() {
        console.log(this.involucrados);
    }
}
