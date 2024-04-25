const car = {
  name: "Tesla",
  model: "MODEL Y",
  color: "Blue",
  type: "Electric vehicle",
};

function has(key, value) {
  return key.hasOwnProperty(value);
}

console.log(has(car, "name")); //true
console.log(has(car, "class")); //false
