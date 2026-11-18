const EventEmitter = require('events');

class SchoolBell extends EventEmitter {}
const bell = new SchoolBell();

bell.on('classStart', (period) => {
  console.log(`[Bell] Period ${period}: class has started.`);
});

bell.on('classEnd', (period) => {
  console.log(`[Bell] Period ${period}: class has ended.`);
});

console.log('--- School Bell System Started ---');

// ---------- Part B: Event loop demo ----------
setTimeout(() => console.log('Ring bell (setTimeout)'), 0);
setImmediate(() => console.log('Ring bell (setImmediate)'));
process.nextTick(() => console.log('Ring bell (process.nextTick)'));

bell.emit('classStart', 1);
bell.emit('classEnd', 1);

console.log('--- Main script finished ---');