/**
 * Dada una matriz de cadenas, devuelve otra matriz que contiene todas sus cadenas más largas.

Ejemplo

Para inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'], la salida debe ser
solución(inputArray) = ['aba', 'vcd', 'aba'].
 */

function solution(array) {
    let resultados = [array[0]];

    for (let i = 1; i < array.length; i++) {
        let cadenaActual = array[i];
        let cadenaMasGrande = resultados[resultados.length - 1];
        if (cadenaActual.length > cadenaMasGrande.length) {
            resultados = [cadenaActual];
        } else if (cadenaActual.length === cadenaMasGrande.length) {
            resultados.push(cadenaActual);
        }
        
    }

    return resultados;
}

let a = solution(['aba', 'aa', 'ad', 'vcd', 'aba']);
console.log(a);
