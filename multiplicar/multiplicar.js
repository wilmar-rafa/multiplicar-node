const fs = require('fs');//nativos
//const fs = require('express');//no son nativos
//const fs = require('./fs');//propios de nuestro proyecto

const colors = require('colors');


let listarTabla=(base,limite)=>{

	console.log('======================='.green);
	console.log(`Tabla del ${base}`.green);
	console.log('======================='.green);

	let data="";

		for (let i=1;i<=limite;i++){
			let total=base*i;
			data+= `${base} * ${i} = ${total}\n`;

		}
	console.log(data);
}

let crearArchivo=(base,limite=10)=>{

	return new Promise((resolve,reject)=>{

		if(!Number(base)){
			reject(`El valor introducido ${base} No es un Numero`);
			return;
		}

		let data="";

		for (let i=1;i<=limite;i++){
			let total=base*i;
			data+= `${base} * ${i} = ${total}\n`;

		}


		fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
		  if (err) 
		  		reject(err);
		  else
		  		resolve (`tabla-${base}-al-${limite}.txt`);
		});
	});
}

module.exports={
	crearArchivo,
	listarTabla
}


