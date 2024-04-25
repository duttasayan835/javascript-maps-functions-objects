// Creating a car named object
const car = {
  name: "Tesla",
  model: "MODEL Y",
  color: "Blue",
  type: "Electric vehicle",
};
function define(car_name) {
  for (const key in car_name) {
    console.log(`${key}: ${car[key]}`);
  }
}

define(car);

// OUTPUT
// name: Tesla
// model: MODEL Y
// color: Blue
// type: Electric vehicle
