//código random
/*

function solution(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
}
- Por cada caracter de `s1`, reemplaza la primera ocurrencia de ese caracter en la cadena `s2` con un signo de exclamación (!) usando la función `replace()`.
- Al final, devuelve el número de signos de exclamación que hay en la cadena `s2`, usando la función `replace()` con una expresión regular que elimina todos los caracteres que no sean signos de exclamación, y la propiedad `length` que devuelve la longitud de la cadena resultante.

Por ejemplo, si las cadenas son "aab" y "abacadabra", la función haría lo siguiente:

- Reemplazaría la primera "a" de `s1` con un signo de exclamación en `s2`, quedando "!bacadabra".
- Reemplazaría la segunda "a" de `s1` con un signo de exclamación en `s2`, quedando "!b!c!d!br!".
- Reemplazaría la "b" de `s1` con un signo de exclamación en `s2`, quedando "!!!c!d!br!".
- Devolvería el número de signos de exclamación en `s2`, que es 6.
*/

/*
En C#
int solution(string s1, string s2) {
    return s1.Distinct().Sum(_ => Math.Min(s1.Count(l => l == _), s2.Count(l => l == _)));
}


La función que te mostré es una forma de resolver el mismo problema que tu función en JavaScript, es decir, contar el número de caracteres iguales entre dos cadenas. La función en C# usa algunos métodos y expresiones que quizás no conozcas, por eso te los voy a explicar uno por uno.

- El método `Distinct()` se usa para obtener una colección de los elementos distintos que hay en otra colección, sin repetirlos. Por ejemplo, si tienes una cadena "aabcc", al aplicarle el método `Distinct()` obtienes una colección con los caracteres "abc".
- El método `Sum()` se usa para obtener la suma de los valores que devuelve una función aplicada a cada elemento de una colección. La función que se usa se puede escribir como una expresión lambda, que es una forma abreviada de definir una función anónima. La expresión lambda recibe un parámetro, que se representa con el símbolo `_`, y devuelve un valor, que se escribe después del símbolo `=>`. Por ejemplo, la expresión lambda `_ => _ * 2` recibe un número y devuelve el doble de ese número.
- El método `Count()` se usa para obtener el número de elementos que cumplen una condición en una colección. La condición se puede escribir como una expresión lambda, que recibe un parámetro y devuelve un valor booleano. Por ejemplo, la expresión lambda `l => l == _` recibe un caracter `l` y devuelve `true` si es igual al caracter `_`, o `false` si no lo es.
- La función `Math.Min()` se usa para obtener el mínimo entre dos números. Por ejemplo, `Math.Min(2, 3)` devuelve 2.

La función en C# hace lo siguiente:

- Recibe dos cadenas como parámetros, `s1` y `s2`.
- Aplica el método `Distinct()` a la cadena `s1`, que devuelve una colección de los caracteres distintos que contiene, sin repetirlos.
- Aplica el método `Sum()` a la colección resultante, que devuelve la suma de los valores que devuelve una función aplicada a cada elemento de la colección. La función que se usa es una expresión lambda que recibe un caracter `_` como parámetro y devuelve el mínimo entre el número de veces que ese caracter aparece en `s1` y el número de veces que aparece en `s2`. Para contar las ocurrencias de un caracter en una cadena, se usa el método `Count()` con otra expresión lambda que compara el caracter `l` con el caracter `_`.
- Devuelve el valor de la suma como un entero.

Por ejemplo, si las cadenas son "aabcc" y "adcaa", la función haría lo siguiente:

- Obtendría la colección de caracteres distintos de `s1`, que sería "abc".
- Aplicaría la función lambda a cada caracter de la colección, obteniendo los siguientes valores:
  - Para el caracter "a", el mínimo entre el número de veces que aparece en `s1` (2) y el número de veces que aparece en `s2` (3) es 2.
  - Para el caracter "b", el mínimo entre el número de veces que aparece en `s1` (1) y el número de veces que aparece en `s2` (0) es 0.
  - Para el caracter "c", el mínimo entre el número de veces que aparece en `s1` (2) y el número de veces que aparece en `s2` (1) es 1.
- Sumaría los valores obtenidos, que serían 2 + 0 + 1 = 3.
- Devolvería el valor de la suma, que sería 3.

Espero que esto te haya aclarado el ejemplo con C#. Si tienes alguna otra duda, no dudes en preguntarme. 😊
*/


/**
Dadas dos cadenas, encuentre la cantidad de caracteres comunes entre ellas.

Ejemplo

Para s1 = 'aabcc' y s2 = 'adcaa', la salida debe ser
solución(s1, s2) = 3.

Las cadenas tienen 3 caracteres comunes: 2 'a' y 1 'c'.
 */

function solucion(cadena1, cadena2){
    aciertos = 0;
    comparacion=0;
    for(i=0; i< cadena1.length; i++){

        for(f=0; f<cadena2.length; f++){

            comparacion= cadena1[i] === cadena2[f];

            if(comparacion === true){
                aciertos++;
                // Reemplazar el caracter que coincide con un espacio vacío
                cadena2 = cadena2.replace(cadena2[f], "");
                // Salir del bucle interno, porque ya no hay más coincidencias para este caracter
                break;
            }
        }
    }
    return aciertos;
}

a = solucion("aabcc", "adcaa"); // 3

console.log(a)

