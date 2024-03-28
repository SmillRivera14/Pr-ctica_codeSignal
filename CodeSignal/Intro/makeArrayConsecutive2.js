/**Ratiorg recibió estatuas de diferentes tamaños como regalo de CodeMaster para su cumpleaños, y cada estatua tenía un tamaño entero no negativo. Como le gusta hacer las cosas perfectas, quiere ordenarlas de menor a mayor para que cada estatua sea más grande que la anterior exactamente en 1. Es posible que necesite algunas estatuas adicionales para poder lograrlo. Ayúdalo a calcular la cantidad mínima de estatuas adicionales necesarias. */

function solution(numbers) {

    //numbers = Array.from(arguments);

    numbers.sort(function(a, b) {
        return a - b;
    });
    
    let estatuasNecesarias = 0;
    
    for (let i = 0; i < numbers.length - 1; i++) {
        const resta = numbers[i + 1] - numbers[i];

        if (resta > 1) {
            estatuasNecesarias += resta - 1;
        }
    }
    return estatuasNecesarias;
}
