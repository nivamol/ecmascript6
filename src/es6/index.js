// declarar una función en versiones anteriores.

function newFunction(name, age, country) {
  var name = name || 'nicolás';
  var age = age || 32; 
  var country = country || 'Col'
  console.log(name, age, country);
}

// funciones en ES6

function newFunction2 (name ='Nicolás', age = 24, country = 'col') {
  console.log(name, age, country);
}

newFunction();
newFunction2();

// Como se concatenaban textos antes. 

let hola = "hola";
let mundo = "mundo";
console.log(hola + ' ' + mundo)

// como se concatena ahora con template literals

let hello = "hello";
let world = "world";
console.log(`${hello} ${world}`);