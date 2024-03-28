/*
Los números de billete suelen constar de un número par de dígitos. 
Un número de billete se considera afortunado si la suma de la primera mitad de los dígitos es igual 
a la suma de la segunda mitad.

Dado un billete número n, determina si tiene suerte o no.

Ejemplo

Para n = 1230, la salida debe ser
solución(n) = verdadero;
Para n = 239017, la salida debe ser
solución(n) = falso.
 */

function solution(n){
    const s = n.toString();
    const firsthalf = s.slice(0,s.length/2); 
    const secondhalf = s.slice(s.length/2, s.length);
    const arrayOne = firsthalf.split('');
    const arrayTwo = secondhalf.split('');
    const x = arrayOne.reduce((a,b)=> Number (a) + Number (b));
    const y = arrayTwo.reduce((a,b)=> Number (a) + Number (b));
    return x === y;
}
    

a = solution(134008)
b = solution(239017)
console.log(`${a}\n ${b}`);