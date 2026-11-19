console.log("1. Start");

setTimeout(() => {
  console.log("4. setTimeout (Timers phase)");
}, 0);

setImmediate(() => {
  console.log("5. setImmediate (Check phase)");
});

process.nextTick(() => {
  console.log("3. process.nextTick (Microtask / nextTick queue)");
});

console.log("2. End");