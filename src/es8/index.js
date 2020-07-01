// ---- Transformar objetos a matrices.

const data = {
  frontend: "nicolas",
  backend: "isabel",
  designer: "felipe",
};
const entries = Object.entries(data); // convertimos ese objeto en una matriz.
console.log(entries);
console.log(entries.length); // nos devuelve cuantos elementos hay.

// ------ convirtiendo objetos en arreglos solo devolviendo sus valores.

const data = {
  frontend: "nicolas",
  backend: "isabel",
  designer: "felipe",
}

const values = Object.values(data); 
console.log(values); //nos devuelve los valores ignorando las propiedades definidas (frontend, backend, designer)
console.log(values.length);


// ------ anteponer o agregar una cadena vacía o elementos a este string. 

const string = 'hello';
console.log(string.padStart(7, 'hi')); //así concatenamos hi con hello.
// el primer valor es cuantos valores queremos que tenga y el otro es los caracterese que vamos a agregar nuevos.
console.log(string.padEnd(12, '-----'));
console.log('food'.padEnd(12, 'i want'));// agregamos al final un elemento. 

// trailing comas.

const obj = {
  name: "nicolas", // la coma establece que al siguiente puede ir un valor o no. 
} 


