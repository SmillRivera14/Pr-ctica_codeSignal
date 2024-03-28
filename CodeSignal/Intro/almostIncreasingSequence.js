/**Dada una secuencia de números enteros como una matriz, determine si es posible obtener una secuencia estrictamente creciente eliminando no más de un elemento de la matriz.

Nota: la secuencia a0, a1, ..., an se considera estrictamente creciente si a0 a1 ... an. La secuencia que contiene un solo elemento también se considera estrictamente creciente.*/

function solution(matriz) {
  
  let estatus = 0;

  for (let i = 1; i < matriz.length; i++) {
    // Si el elemento actual es menor o igual al anterior, necesitamos hacer una eliminación
    if (matriz[i] <= matriz[i - 1]) {
        estatus++;
    }
    //Si hemos realizado más de una eliminación, la secuencia no puede ser casi creciente
    if (estatus > 1)return false;
    
    //Si el elemento actual es menor o igual al elemento anterior al anterior,necesitamos "arreglar" la secuencia
    if(i > 1 && matriz[i] <=matriz[i -2]){
      matriz[i] = matriz[i-1]
    }
  }
  
  //Si llegamos hasta aquí, la secuencia es casi creciente (o totalmente creciente)
  return true;
}

  Test2 = solution([1, 3, 2]);
  test1= solution([1, 3, 2, 1]);
  test3 = solution([10, 1, 2, 3, 4, 5]);
  console.log("Solution 1: " + Test2 + " |DEBE SER TREU")
  console.log("Solution 2: " + test1 + " |DEBE SER FALSE")
  console.log("Solution 3: " + test3 + " |DEBE SER TRUE")
