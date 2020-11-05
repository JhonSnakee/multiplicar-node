const fs = require('fs');

let data = '';
for (let i = 0; i <= 10; i++) {
    let base = i;
    data += `Tabla del ${i}:\n`
    for (let i = 0; i <= 10; i++) {
        let result = base * i;
        data += `${base} X ${i} = ${result}\n`;
    }
}

fs.writeFile('./tablas/tablas1a10.txt', data, (err) => {
  if (err) throw err;
  console.log('El archivo ha sido creado');
});