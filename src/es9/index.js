const obj = {
  name: 'nicolas',
  age: 24,
  country: 'colombia'
}

let {name, ...all} = obj; // obtener un objeto solo con los datos que necesitamos.
console.log(obj, all);

// ---- propiedades de propagación para unir los elementos que queramos a un nuevo objeto. 

const obj = {
  name: 'nicolas',
  age: 24
}

const obj1 = {
  ...obj, // aquí estamos uniendo el objeto obj con el obj1 (anidar objetos)
  country: 'COl'
}

console.log(obj1);

// ----- promise.finally -> saber cuando ha terminado el llamado y poder ejecutar una funcion segun sea el caso. 

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('hello world'), 3000)
    : reject(new Error('Test Error'))
  }) 
} 

//antes
helloWorld()
  .then(Response => console.log(Response))
  .catch(error => console.log(error));

  //ahora

helloWorld()
  .then(Response => console.log(Response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))// me permite ejecutar un código según sea el caso.


// ------- Regexp -> agrupar bloques de regexp y poder acceder a cada uno

const regextData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

// el match nos permita saber si los datos estan establecidos en los regexp
const match = regextData.exec('2018-04-20');

// para entender como esta constituido cada elemento según lo que queramos tener. 
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day); // asi podemos acceder a cada uno de los elementos del regexp