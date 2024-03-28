/**n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split. 
 * 
 * n niños tienen m caramelos. Quieren comer tantos dulces como puedan, pero cada niño debe comer exactamente la misma cantidad de dulces que cualquier otro niño. Determine cuántos dulces comerán todos los niños juntos. Los caramelos individuales no se pueden dividir.
*/

function solution(boys,caramelos){
    division = caramelos/boys;
return (Math.floor(division)) * boys;
}


c = solution(3,10);
console.log(c);

/**
 * cada niño debe comer la misma cantidad de dulces.
 * para 3 niños y 10 caramelos debo dividir cada caramelo entre los niños caramelo/niños
 * para 10 caramelos y 3 niños, cada niño comera 9 caramelos 10/3 = 3.33, debo redondear a 3
 * 
 * 
 */

//funcion de algún random
function solution2(n, m) {
    return m - m % n;
}