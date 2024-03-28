function solution(inputString) {
    const x = inputString.split('') ;
    console.log("Este es X " + x);

    const y= x.reverse();
    console.log("Este es y " + y);

    const z= y.join('');
    console.log("Este es z " + z);

    
    return z === inputString
}

a = solution("bar");
console.log(a)