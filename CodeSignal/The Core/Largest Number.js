/**Given an integer n, return the largest number that contains exactly n digits. 
 *  [Dado un número entero n, devuelve el número más grande que contenga exactamente n dígitos.]
*/
function solution(n) {
    return  Math.pow(10,(n)) - 1;
}

a = solution(2)
console.log(a);

