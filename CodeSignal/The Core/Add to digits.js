/**You are given a two-digit integer n. Return the sum of its digits. 
 * Se le da un número entero n de dos dígitos. Devuelve la suma de sus dígitos.
*/

function solution (n){
  suma = n.toString();
  suma = parseInt(suma[0]) + parseInt(suma[1]);
  return suma;
}

function solution2(n){
  return n%10 + Math.floor(n/10)
}

a = solution2(29);
console.log(a);