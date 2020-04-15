const argv = require('./config/yargs.js').argv;

const colors = require('colors');

const {crearArchivo,listarTabla}=require('./multiplicar/multiplicar');//requireds

let comando=argv._[0];

console.log(comando);
console.log(argv.base);
console.log(argv);

switch(comando){
	case 'listar':
		listarTabla(argv.base,argv.limite)
		//.then(listaTabla=>console.log(listaTabla))
		//.catch(e=>console.log(e))
		;
	break;

	case 'crear':
		crearArchivo(argv.base,argv.limite)
		.then(archivo=>console.log(`Archivo creado:`,colors.green(`${archivo}`)))
		.catch(e=>console.log(e));
	break;

	default:
		console.log('comando no reconocido');

}
//let base='3';

//console.log(process.argv);
//let argv2=process.argv;
//console.log(argv.base);
//console.log(argv.l);
//console.log(argv2);
//let argv= process.argv;
//let parametro=argv[2];
//let base= parametro.split('=')[1];	
//console.log(base[1]);


/*
*/