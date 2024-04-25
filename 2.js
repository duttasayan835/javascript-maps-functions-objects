const student = {
  name: "Sayan",
  age: "18",
  grade: "A",
};

function upgrade(neww) {
  student.grade = neww;
}

upgrade("B");
console.log(student);

// OUTPUT
// { name: 'Sayan', age: '18', grade: 'B' }
