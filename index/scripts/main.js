import { Persona } from "./Persona.js";
import { LicenciaConduccion } from "./LicenciaConduccion.js";
import { Accidente } from "./Accidente.js";
import { Carro } from "./Carro.js";
import { Motocicleta } from "./Motocicleta.js";
import { Bicicleta } from "./Bicicleta.js";
// Crear personas sin licencia de conducción inicial
const persona1 = new Persona("Juan Pérez", "123456789", "3054656022", 25);
const persona2 = new Persona("María López", "987654321", "3209605245", 30);
// Crear licencias de conducción
const licenciaJuan = new LicenciaConduccion("Tipo A", new Date(4 / 4 / 2010), new Date(4 / 4 / 2015), persona1);
const licenciaMaria = new LicenciaConduccion("Tipo B", new Date(9 / 9 / 2013), new Date(9 / 9 / 2020), persona2);
// Asignar licencias de conducción a las personas
persona1.licencia = licenciaJuan;
persona2.licencia = licenciaMaria;
// Crear vehículos
const carro = new Carro(5, "ABC123", 200, "Toyota", "Rojo", "Corolla", 4, persona1);
const motocicleta = new Motocicleta(250, "XYZ987", 150, "Honda", "Negro", "CBR", 2, persona2);
const bicicleta = new Bicicleta("Urbana", true, "GW", "Azul", "Urban", 2, persona1);
// Crear accidente
const accidente = new Accidente(new Date(9 / 5 / 2023), "Colisión frontal", 5, carro.marca, carro.modelo, carro.color, carro.ruedas, persona1);
// Agregar vehículos al accidente
accidente.agregarVehiculo(motocicleta.marca, motocicleta.modelo, motocicleta.color, motocicleta.ruedas, persona2);
accidente.agregarVehiculo(bicicleta.marca, bicicleta.modelo, bicicleta.color, bicicleta.ruedas, persona1);
// Listar vehículos involucrados en el accidente
console.log("Vehículos involucrados en el accidente:");
console.log(accidente.listarVehiculos());
// Eliminar un vehículo del accidente
console.log(accidente.eliminarVehiculo(motocicleta));
// Buscar un vehículo en el accidente
console.log("Buscar vehículo en el accidente:");
console.log(accidente.buscarVehiculo(carro));
