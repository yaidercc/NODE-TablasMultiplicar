const {crearArchivo} = require("./helpers/multiplicar.js");
const  argv = require("./config/yargs.js");

crearArchivo(argv.b,argv.l,argv.t)
.then(fileName=>console.log(fileName))
.catch(err=>console.log(err))

/*
# Multiplication Tables

Una aplicacion de consola realizada en Node.js en la cual podras generar un archivo o ver en consola la tabla de multiplicacion de un numero.

Options:

--help Show help [boolean]

--version Show version number [boolean]

-b, --base la base de la tabla de multiplicar [number] [required]

-l, --listar muestra la tabla en consola [boolean] [default: false]

-h, --hasta establece el limite del multiplicador [number] [default: 10]
*/