/**Dado un divisor y una cota, encuentre el entero más grande N tal que:

N es divisible por divisor.
N es menor o igual que el límite.
N es mayor que 0.
Se garantiza que tal número existe.

Ejemplo

Para divisor = 3 y límite = 10, la salida debe ser
solución(divisor, límite) = 9.

El mayor número entero divisible por 3 y no mayor que 10 es 9. */

/**
 *Primero, verifica si el divisor es mayor que cero y si el límite es mayor o igual que el divisor. Si no, muestra *un mensaje de error y termina el programa.
 *Segundo, divide el límite entre el divisor y redondea el resultado hacia abajo. Este será el cociente máximo *que   puedes obtener.
 *Tercero, multiplica el cociente máximo por el divisor. Este será el número entero más grande por el cual es *divisible X, que no sea mayor que el límite.
 */
function solución(divisor, límite){
    maxCociente= Math.floor(límite/divisor);
    enteroMayor = maxCociente * divisor;
    return enteroMayor;
}