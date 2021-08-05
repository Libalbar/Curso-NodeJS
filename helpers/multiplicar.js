const fs = require('fs');

const getTabla = async(base=1, listar=false, hasta=10) => {
    try {    

        let salida = '';
        for (i = 1; i <= hasta; i++) {
            salida += `       ${base} x ${i} = ${base*i}\n`;
        }
        // fs.writeFile('Tabla 5.txt', salida, (err) => {
        //    if (err) throw err;
        //    console.log('Se ha creado el archivo Tabla 5.txt');
        // });
        if (listar) {
            console.log('=========================');
            console.log(`       Tabla del ${base}       `);
            console.log('=========================');
            console.log(salida);
        }
        fs.writeFileSync(`./salida/Tabla ${base}.txt`, salida);
        return `Tabla ${base}.txt ha sido creada`;    
    } catch (error) {
        throw error;
    }
} 

module.exports = {
    getTabla
}