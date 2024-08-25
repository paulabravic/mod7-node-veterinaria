const fs = require('fs');

const nombreArchivo = './assets/citas.json';

const leerCitas = () => {
    let contenido = fs.readFileSync(nombreArchivo,'utf8');
    
    if(contenido === '') contenido = [];
    else contenido = JSON.parse(contenido);

    return contenido;
}

const agregarCita = (cita) => {
    const citas =  leerCitas(nombreArchivo);
    citas.push(cita);
    fs.writeFileSync(nombreArchivo, JSON.stringify(citas));
    console.log(`La cita fue agregada exitosamente.`);
}


module.exports = {agregarCita,leerCitas};
