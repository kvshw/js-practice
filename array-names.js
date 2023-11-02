const names = ["Anna", "Susy", "Bob"];
const lastName = ["Shally"];
let fullName = [];

for (let i = 0; i < names.length; i++) {
  const newName = `${names[i]} ${lastName}`;
  fullName.push(newName);
}

console.log(fullName);
