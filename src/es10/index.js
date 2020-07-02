


let array = [1,2,3,[1,2,3,[1,2,3]]];

// .flat -> nos devuelve una matriz con cualquier submatriz aplanada. 
// entender como estan construidos nuestros elementos.

console.log(array.flat(2)) // Flat recibe como argumento la profundidad.

// --- flatmap -> mapear cada elemento, pasarle una funcion y aplanarlo según el resultado.

let array = [1,2,3,4,5]; 

console.log(array.flatMap(value => [value, value * 2]));

// ---- .trimStart - eliminar los espacios en blanco al principio de string. 

let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());


// ---- eliminar espacios en blanco al final de un string.

let hello = 'hello world        ';
console.log(hello.trimEnd()); 


// ---- Optional cash binding -> pasar de forma opcional el valor de error a catch 

try {

} catch /*(error)*/ {  // ya podemos dejar de colocar el parentesis con el error. 
  error
}

// ------ from entries  -> Transformar claves de valor en un objeto. (transformar arreglos a objetos)

let entries = [["name", "oscar" ], ["age", 32]];

console.log(Object.fromEntries(entries)); // aquí devolvemos el arreglo transformado en un objeto 

// ---- objeto de tipo simbolo para poder acceder a una descripción 

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);

