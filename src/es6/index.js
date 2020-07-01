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


// multilínea antes: 

let lorem = "frase epica \n" 
						+ "otra frase epica";


//  multilínea después ES6+

let lorem2 = `frase epica
otra frase epica`;
            
console.log(lorem2)

// Desestructuración
// Acceder a objetos antes: 
let person = {
	'name': 'Nicolás',
	'age' : 24, 
	'country': 'Colombia'
}
console.log(person.name, person.age)

//Acceder a objetos ES6+:

let {name, age, country} = person;
console.log(name, age, country);

// Spread operator (operdor de propagación)
// nos permite expandir varios elementos.

let team1 = ['Nicolas', 'Oscar', 'julian'] 
let team2 = ['Carlos', 'Ernesto', 'Juan']

// aquí unimos los 2 strings.
let education = ['David', ...team1, ...team2]; 

console.log(education);


// let, const 
// let = nueva forma de declarar variables.

// variables antes: 

var hola = "hola";
// con var se puede acceder a ella de manera global

let saludo = "hola";
// con let la variable solo esta disponible en su scope.

{
	var globalVar = "global var";
}

{
let globalLet = "Global let"
  console.log(globalLet);
//aqui se visualiza normalmente en consola.
}

console.log(globalVar);
console.log(globalLet);
// let nos da reference error porque esta en otro bloque.
// var se muestra correctamente. 

const a = 'b'; 
// Definir variables que no van a cambiar nunca su valor.
// al intentar reasignar el valor da error.


// ------ Arrow Functions, Promesas y Parámetros en objetos


//crear objetos antes.
let name = "nicolas";
let age = 24;

// obj = {name: name, age: age};
// console.log(obj)

//crear objetos ES&+

obj2 = {name, age};
console.log(obj2)


//arrow functions:

const names = [
  {
    name: "nicolas",
    age: 24
  }
  {
    name: "oscar",
    age: 23
  }
]

let listOfNames = names.map(function(item) {
  console.log(item.name)
  //con esto conseguimos imprimir en consola el nombre de el item. 
})

//lo mismo con arrow functions. 
//forma 1
const listOfNames2 = names.map(item => console.log(item.name));
// forma 2
const listOfNames3 = (name, age, country) => {
  ..., 
}
//forma 4
const listOfNames4 = name => {}; // en caso de recibir solo un parámetro ignoramos los paréntesis. 

const square = num => num * num;

// ------------ Promesas

const helloPromise = () => {
	return new Promise((resolve, reject) => {
    if(true) {
      resolve("hey");
    } else {
      reject("algo salio mal");
    }
	});
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('hola'))
  .catch(error => console.log(error));


  // Clases, Módulos y Generadores

  class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }
    sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB
    }
  }

  const calc = new calculator();
  console.log(calc.sum(2, 2));


// aqui importamos el module hello con la palabra import
import { hello } from "./module"

hello();


// Generators -> funcion que retorna una serie de valores según el algoritmo definido.

function* helloWorld() {
  if(true) {
    yield "hello, "; //yield nos permite retornar algo y guardar el estado de forma interna.
  } if (true) {
    yield 'world';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);