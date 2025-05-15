const fs = require("fs");

Promise.resolve().then(() => {
	console.log("This is a Promise 1 in Promise Queue #1\n");
});

fs.readFile(__filename, () => {
	console.log("File read #1\n");

	setImmediate(() => {
		console.log("This is a setImmediate in I/O callback #1\n");
	});
});

process.nextTick(() => {
	console.log("This is a process 1 in NextTick Queue #1\n");
});

setTimeout(() => {
	console.log("This is a setTimeout #1\n");
}, 0);

setImmediate(() => {
	console.log("This is a setImmediate #1\n");
});

/*
Console:
This is a process 1 in NextTick Queue #1

This is a Promise 1 in Promise Queue #1

This is a setTimeout #1

This is a setImmediate #1

File read #1

This is a setImmediate in I/O callback #1
*/
