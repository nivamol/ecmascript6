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