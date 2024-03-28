let a = 1;
let b = 2;
let Array2 = [100, 200];

let myArray = [a, b, 4, 3, 6, Array2, 44, 66, 18];

function soltuion(b,a){
    return b-a
}

/**
 * interesnate.
 * me devolvera todos los valores pero positivos o negativos según requiera la función.
 * let result = myArray.map((Array)=> (Array>=10));
 *  */ 
/**
 * me devuleve los valores que cumplen.
 * let result = myArray.filter((Array)=> (Array>=10));
 */
 
let allElements = myArray.flat();
let lastElement = allElements[allElements.length-1];

const multiplyArray = (arr) => {
    return arr.map((element) => {
      if (Array.isArray(element)) {
        // Si el elemento es un array, aplicar recursivamente la multiplicación
        return multiplyArray(element);
      } else {
        // Si el elemento no es un array, multiplicarlo por 2
        return element * 2;
      }
    });
};
  
const result = multiplyArray(myArray);

console.log(result);

//indice = Array.indexOf(4);

  