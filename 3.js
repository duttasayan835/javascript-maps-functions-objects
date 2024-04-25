const student = {
  name: "Sayan",
  age: "18",
  grade: "A",
};

function countele(Obj) {
  return Object.keys(Obj).length;
}
console.log(countele(student));

//OUTPUT
//3
