/* Timer Queue */
setTimeout(() => {
	console.log("This is a setTimeout 1\n");
}, 0);

setTimeout(() => {
	console.log("This is a setTimeout 2\n");
}, 0);

setTimeout(() => {
	console.log("This is a setTimeout 3\n");
}, 0);

process.nextTick(() => {
	console.log("This is a process 1 in NextTick Queue #1\n");
});

process.nextTick(() => {
	console.log("This is a process 1 in NextTick Queue #2\n");
	process.nextTick(() => {
		console.log("This is a inner process 2 in NextTick Queue #2\n");
	});
});

process.nextTick(() => {
	console.log("This is a process 1 in NextTick Queue #3\n");
});

Promise.resolve().then(() => {
	console.log("This is a Promise 1 in Promise Queue #1\n");
});

Promise.resolve().then(() => {
	console.log("This is a Promise 1 in Promise Queue #2\n");

	process.nextTick(() => {
		console.log("This is a inner process 1 in Promise Queue #2\n");
	});
});

Promise.resolve().then(() => {
	console.log("This is a Promise 1 in Promise Queue #3\n");
});

/* 
Console:

This is a process 1 in NextTick Queue #1

This is a process 1 in NextTick Queue #2

This is a process 1 in NextTick Queue #3

This is a inner process 2 in NextTick Queue #2

This is a Promise 1 in Promise Queue #1

This is a Promise 1 in Promise Queue #2

This is a Promise 1 in Promise Queue #3

This is a inner process 1 in Promise Queue #2

This is a setTimeout 1

This is a setTimeout 2

This is a setTimeout 3
*/
