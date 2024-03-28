function addBorder(matrix) {
    // Crear un arreglo para almacenar el resultado
    const borderedMatrix = [];
    
    // Longitud de la fila
    const rowLength = matrix[0].length + 2;
    
    // Añadir fila superior de asteriscos
    borderedMatrix.push("*".repeat(rowLength));
    
    // Iterar sobre cada fila de la matriz
    for (let row of matrix) {
        // Añadir asterisco al inicio y final de cada fila
        borderedMatrix.push("*" + row + "*");
    }
    
    // Añadir fila inferior de asteriscos
    borderedMatrix.push("*".repeat(rowLength));
    
    return borderedMatrix;
}

const matriz = ["a"];
const resultado = addBorder(matriz);
console.log(resultado);
