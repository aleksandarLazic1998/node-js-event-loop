/* MicroTask Queue */

console.log("This is the first item in callstack #1\n");

Promise.resolve().then(() => {
	console.log("This is the forth item in callstack #4\n");
	console.log("This is a process in Promise Queue #1\n");
});

process.nextTick(() => {
	console.log("This is the third item in callstack #3\n");
	console.log("This is a process in NextTick Queue #1\n");
});

console.log("This is the second item in callstack #2\n");

/* Console:

This is the first item in callstack #1

This is the second item in callstack #2

This is the third item in callstack #3

This is a process in NextTick Queue #1

This is the forth item in callstack #5

This is a process in Promise Queue #2

*/
