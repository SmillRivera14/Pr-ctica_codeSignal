/**
Escriba una función que invierta los caracteres entre paréntesis (posiblemente anidados) en la cadena de entrada.

Las cadenas de entrada siempre estarán bien formadas con () coincidentes.

Ejemplo

Para inputString = '(bar)', la salida debe ser
solución(inputString) = 'rab';
Para inputString = 'foo(bar)baz', la salida debe ser
solución(inputString) = 'foorabbaz';
Para inputString = 'foo(bar)baz(blim)', la salida debe ser
solución(inputString) = 'foorabbazmilb';
Para inputString = 'foo(bar(baz))blim', la salida debe ser
solución(inputString) = 'foobazrabblim'.
Porque 'foo(bar(baz))blim' se convierte en 'foo(barzab)blim' y luego en 'foobazrabblim'.
 */
//-->revisar si hay parentesis en la cadena.
//--> si hay eliminarlos y los caracteres dentro de los parentesis revertirlos
function solution(inputString){
    let regex = /\((.*?)\)/g;
    let nuevaCadena = inputString.replace(regex,(match, gruop1) =>{
        let contenidoRevertido = gruop1.split('').reverse().join('');
        return contenidoRevertido;
    });
    return nuevaCadena;
}

let c = solution("foo(bar(baz))blim");
console.log("c: " + c)


function reverseInParentheses (s){

    if(s.includes('(')){
        return reverseInParentheses(reverse(s));
    }
    return s;
}

function reverse(s){

    var regex = /\(([^()]*)\)/i;
    var subStr = regex.exec(s)[1];
    subStr = subStr.split('').reverse().join('');
    return s.replace(regex, subStr);
}

let u = reverseInParentheses("foo(bar(baz))blim");
console.log("u "+ u)
