/**
 Algunas personas están paradas en fila en un parque. Hay árboles entre ellos que no se pueden mover. Tu tarea es reorganizar a las personas según su altura en orden no descendente sin mover los árboles. 
 ¡La gente puede ser muy alta!

Ejemplo

Para a = [-1, 150, 190, 170, -1, -1, 160, 180], la salida debe ser
solución(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
 */

function solution(n) {
    // Filtrar los valores diferentes de -1 y luego ordenar el array resultante
    const numerosPositivos = n.filter(valor => valor !== -1).sort((a, b) => a - b);
  
    // Mapear el array original y reemplazar solo los -1 con los números ordenados
    return n.map(valor => (valor === -1 ? valor : numerosPositivos.shift()));
  }
  
  // Ejemplo de uso
  var a = [-1, 150, 190, 170, -1, -1, 160, 180];
  var resultado = solution(a);
  
  console.log(resultado);
  