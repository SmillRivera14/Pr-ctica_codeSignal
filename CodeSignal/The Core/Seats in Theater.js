/**Tu amigo te aconsejó que vieras una nueva función en el teatro más popular de la ciudad. Sabe mucho de arte y sus consejos suelen ser buenos, pero esta vez no: la actuación resultó tremendamente aburrida. Es tan malo que quieres escabullirte, lo cual es bastante simple, especialmente porque la salida está ubicada justo detrás de tu fila a la izquierda. Todo lo que necesitas hacer es subirte a tu asiento y dirigirte a la salida.

El principal problema es tu timidez: tienes miedo de acabar bloqueando la vista (aunque sea por un par de segundos) de todas las personas que se sientan detrás de ti y en tu columna o las columnas de tu izquierda. Para ganar algo de valor, decides calcular el número de esas personas y ver si puedes llegar a la salida sin molestar a demasiadas personas.

Dado el número total de filas y columnas en el teatro (nFilas y nCols, respectivamente), y la fila y columna en la que estás sentado, devuelve el número de personas que se sientan estrictamente detrás de ti y en tu columna o a la izquierda, suponiendo todos los asientos están ocupados. */


/**EXPLICACIÓN (ES CALCULAR EL AREA DE UN RECTANGULO) */

/**Para calcular el número de asientos dentro de ese rectángulo.
 * puedes usar el área del rectángulo, que es igual al producto de su base por su altura. 
 * La base del rectángulo es el número de columnas que hay desde tu columna hasta la última columna del teatro, más una columna extra para incluir la tuya. 
 * La altura del rectángulo es el número de filas que hay desde tu fila hasta la última fila del teatro. Por eso, la fórmula es:

número de personas = (número de columnas - tu columna + 1) * (número de filas - tu fila)
                                    BASE                  POR          ALTURA

 */

function solution (totalColm, totalFils, miColm, miFila,){
    return (totalColm - miColm + 1) * (totalFils - miFila)
}