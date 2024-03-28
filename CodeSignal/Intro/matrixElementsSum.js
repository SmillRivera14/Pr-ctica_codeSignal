/**
 * Después de hacerse famosos, los CodeBots decidieron mudarse juntos a un nuevo edificio. Cada una de las habitaciones tiene un coste diferente, y algunas de ellas son gratuitas, ¡pero corre el rumor de que todas las habitaciones gratuitas están embrujadas! Dado que los CodeBots son bastante supersticiosos, se niegan a permanecer en cualquiera de las habitaciones libres, o en cualquiera de las habitaciones debajo de cualquiera de las habitaciones libres.

Dada una matriz, una matriz rectangular de números enteros, donde cada valor representa el costo de la habitación, su tarea es devolver la suma total de todas las habitaciones que son adecuadas para los CodeBots (es decir: sumar todos los valores que no aparecen a continuación un 0).
 */

function solution(matriz){

    let suma = 0;

    //iterando sobre las culumnas de la matriz.
    //comienza en cero 
    for (let i=0;i < matriz[0].length; i++){

        //iterando a travez de las filas
        for(let f=0; f < matriz.length; f++){

            if(matriz[f][i] ===0)break;

            suma += matriz[f][i];
        }
    }
    return suma;
}

b = [[0, 1, 1, 2], 
     [0, 5, 0, 0], 
     [2, 0, 3, 3]];

a = solution(b)

console.log(a);
