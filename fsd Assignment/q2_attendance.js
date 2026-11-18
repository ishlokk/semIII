const fs = require('fs');
const FILE = 'attendance.txt';

function readNames() {
  if (!fs.existsSync(FILE)) return [];
  return fs.readFileSync(FILE, 'utf8')
    .split('\n')
    .filter((name) => name.trim() !== '');
}

function writeNames(names) {
  fs.writeFileSync(FILE, names.length ? names.join('\n') + '\n' : '');
}

function addStudent(name) {
  fs.appendFileSync(FILE, name + '\n');
  console.log(`Added: ${name}`);
}

function showAll() {
  const names = readNames();
  if (names.length === 0) {
    console.log('Attendance list is empty.');
    return;
  }
  console.log('--- Attendance List ---');
  names.forEach((name, i) => console.log(`${i + 1}. ${name}`));
}

function updateStudent(oldName, newName) {
  const names = readNames();
  const index = names.findIndex((n) => n.toLowerCase() === oldName.toLowerCase());
  if (index === -1) {
    console.log(`"${oldName}" not found.`);
    return;
  }
  names[index] = newName;
  writeNames(names);
  console.log(`Updated: ${oldName} -> ${newName}`);
}

function deleteStudent(name) {
  const names = readNames();
  const index = names.findIndex((n) => n.toLowerCase() === name.toLowerCase());
  if (index === -1) {
    console.log(`"${name}" not found.`);
    return;
  }
  names.splice(index, 1);
  writeNames(names);
  console.log(`Deleted: ${name}`);
}

const [, , command, arg1, arg2] = process.argv;

switch (command) {
  case 'add':    arg1 ? addStudent(arg1) : console.log('Usage: add "<name>"'); break;
  case 'show':   showAll(); break;
  case 'update': arg1 && arg2 ? updateStudent(arg1, arg2) : console.log('Usage: update "<old>" "<new>"'); break;
  case 'delete': arg1 ? deleteStudent(arg1) : console.log('Usage: delete "<name>"'); break;
  default:
    console.log('Commands:\n  add "<name>"\n  show\n  update "<old>" "<new>"\n  delete "<name>"');
}