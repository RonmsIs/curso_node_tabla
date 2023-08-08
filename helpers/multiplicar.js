const fs = require('fs');
const colors=require('colors');

const crearArchivoTabla = async(base = 5, listar = false, hasta = 10)=>{

    try{
 
        let salida = '';
        let consola = '';

        for (let i=1; i<=hasta; i++){

            //(+=) es igual a poner salida = salida +
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${i} ${'x'.yellow} ${base} ${'='.yellow} ${base*i}\n`;
        }
        if(listar){
            console.log('============================='.red);
            console.log('Tabla del '.blue ,colors.green(base));
            console.log('============================='.red);
            
            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt creada`;

    }catch(error){
        throw error;
    }
    
}

module.exports = {
    crearArchivoTabla
};