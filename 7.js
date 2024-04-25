const users = new Map();
function adduser(name, age, email) {
  const info = { age, email };
  users.set(name, info);
}
function update(name, age, email) {
  if (users.has(name)) {
    const info = users.get(name);
    info.age = age;
    info.email = email;
  }
}
function del(name) {
  users.delete(name);
}

adduser("Alice", "30", "avjdnafoijao");
adduser("Sayan", "19", "avndipnonvbvobo");
adduser("Aishik", "69", "aidmvaduhfhe");
console.log(users);

update("Aishik", "26", "ahivbaoubrgbgv");
console.log(users);

del("Alice");
console.log(users);

//OUTPUT
// Map(3) {
//     'Alice' => { age: '30', email: 'avjdnafoijao' },
//     'Sayan' => { age: '19', email: 'avndipnonvbvobo' },
//     'Aishik' => { age: '69', email: 'aidmvaduhfhe' }
//   }
//   Map(3) {
//     'Alice' => { age: '30', email: 'avjdnafoijao' },
//     'Sayan' => { age: '19', email: 'avndipnonvbvobo' },
//     'Aishik' => { age: '26', email: 'ahivbaoubrgbgv' }
//   }
//   Map(2) {
//     'Sayan' => { age: '19', email: 'avndipnonvbvobo' },
//     'Aishik' => { age: '26', email: 'ahivbaoubrgbgv' }
//   }
