/**
 * El problema alternatingSums de CodeSignal es un ejercicio de programación que pide sumar los pesos de un conjunto de personas de manera alternada. Cada persona está representada por un número entero que indica su peso. La tarea es dividir a las personas en dos equipos y sumar los pesos de cada equipo de manera alternada.
 */


function solution(array){
    let sum = 0;
    let sum2 = 0;
    flag = true;
    for(i=0; i < array.length; i++){
        numero = array[i];
        if(flag == true){
            sum +=numero;
            flag=false;
        }else{
            sum2 +=numero;
            flag=true;
        }
    }
    let array2 = [sum,sum2]
    return array2
}

a = solution([50, 60, 60, 45, 70])

console.log(a);