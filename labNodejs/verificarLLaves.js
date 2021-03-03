const fs = require('fs');

//process.argv.forEach(function (val, index, array) { console.log(index + ': ' + val); });

const args = process.argv.slice(2);
var init = '({hola como estas})'
var arreglo = init.split('');
var contPars = 0, 
contArgs = 0, 
contCors = 0;

for (i=0;i<=arreglo.length;i++) { 

    arreglo[i] == '(' ? ++contPars: null;
    arreglo[i] == ')' ? --contPars: null;
    arreglo[i] == '[' ? ++contCors: null;
    arreglo[i] == ']' ? --contCors: null;
    arreglo[i] == '{' ? ++contArgs: null;
    arreglo[i] == '}' ? --contArgs: null;
    
}

console.log('------')

contPars !=0 || contCors !=0 || contArgs !=0 ? console.log('incorrecta') : console.log('correcta');