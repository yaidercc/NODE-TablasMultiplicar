const fs = require("fs");
require("colors");
const crearArchivo = async (base = 5,list=null,to=10) => {
    return new Promise((resolve,reject)=>{

        let output='',
        consoles = '';
        for (let index = 1; index <= to; index++) {
            output += `${base} x ${index} = ${base*index}\n`;
            consoles += base +" x ".red+ index +" = ".red+ base*index +"\n";
        }

        if (list) {
            console.log("=================".green);
            console.log(`  Tabla del ${base}:  `.cyan);
            console.log("=================".green);
            return console.log(consoles);
        }
        fs.writeFileSync(`files/Tabla-${base}.txt`, output)

        resolve(`Tabla-${base}.txt Creado`.rainbow)
        reject(`No se pudo crear el archivo: Tabla-${base}.txt`)
    })
    
}

// funcion para exportar objetos.
module.exports={
    crearArchivo
}