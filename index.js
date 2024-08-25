const {agregarCita,leerCitas} = require("./operaciones.js");

const argumentos = process.argv.slice(2);

const operacion = argumentos[0] === undefined ? '' : argumentos[0];;
const nombre = argumentos[1] === undefined ? '' : argumentos[1];
const edad = argumentos[2] === undefined ? '' : argumentos[2];
const animal = argumentos[3] === undefined ? '' : argumentos[3];
const color = argumentos[4] === undefined ? '' : argumentos[4];
const enfermedad = argumentos[5] === undefined ? '' : argumentos[5];

if (operacion === "registrar") {
  const citaNueva = {
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad
  };

  agregarCita(citaNueva);

} 
else if (operacion === "leer") {
    const citas = leerCitas();
    console.log("Citas: ", citas);
}
else {
    console.log(`La operación no existe, debe usar 'registrar' o 'leer'`);
}
