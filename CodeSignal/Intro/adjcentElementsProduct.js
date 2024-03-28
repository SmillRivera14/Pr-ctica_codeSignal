function solution (esteArray){
    //const esteArray = Array.from(arguments);

    if (esteArray.length < 2){
        return "El array está mal"
    }

    let maxProduct= -Infinity;

    for (let i = 0; i<esteArray.length -1; i++){
        const product = esteArray[i] * esteArray[i+1];
        if (product > maxProduct){
            maxProduct = product;
        }
    } 

    return maxProduct;
}


let a = solution([1, 3, 2]);
console.log(a)