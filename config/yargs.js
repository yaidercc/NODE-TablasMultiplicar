const { alias } = require('yargs');

const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type:'number',
                        demandOption:true,
                        describe:'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{ 
                        alias:'listar',
                        type:'boolean',
                        demandOption:false,
                        default:false,
                        describe:'Muestra la tabla en consola'
                    })
                    .option('t',{
                        alias:'to',
                        type:'number',
                        default:10,
                        describe:'Indica hasta que numero se va a multiplicar la base brindada'
                    })
                    .check((argvs,options)=>{
                        if(isNaN(argvs.b)){
                            console.log('La base debe ser un numero.');
                        }
                        return true;
                    }).argv
                    
module.exports=argv
