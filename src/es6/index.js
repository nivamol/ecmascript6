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