const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('======================'.yellow)
    console.log(`tabla de ${base}`.blue)
    console.log('======================'.red)

    for (let i = 0; i <= limite; i++) {
        let result = base * i;
        // data += `${base} X ${i} = ${result}\n`;
        console.log(`${base} X ${i} = ${result}\n`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise ((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un numero`);
            return;
        };

        let data = '';

        for (let i = 0; i <= limite; i++) {
            let result = base * i;
            data += `${base} X ${i} = ${result}\n`;
        }
        
        
        fs.writeFile(`../tablas/tabla-${base}.txt`, data, (err) => {
          if (err) 
            reject(err);
          else
            resolve(`tabla-${base}.txt`);
        });
    })
};

module.exports = {
    crearArchivo,
    listarTabla
};