function say(word) {
    console.log(word);
}

function sumar(num1, num2) {
    resultado = num1 + num2;
   console.log("La suma es: "+resultado)
}

function restar(num1, num2) {
    resultado = num1 - num2;
   console.log("La resta es: "+resultado)
}

module.exports = {
    "say" : say,
    "sumar": sumar,
    "restar" : restar
}

