# Node.js Event Loop

[Event loop representation](/assets/event-loop-representation.png)

## MicroTask Queue

MicroTask Queue has 2 built in queues inside of it:

1. NextTick Queue
2. Promise Queue

The rule of MicroTask Queue is that first nextTick callbacks are executed first then the Promise callbacks
The _process.nextTick_ should be discouraged because it can cause Event Loop starvation.

## Timer Queue

To start timer queue you can use 2 methods:

1. setTimeout - This will delegate the time you specified before it is called to Queue.

```
    setTimeout(() => {
	    console.log("This is a setTimeout \n");
    }, 1000);
```

2. setInterval - This will call the callback function in time interval in loop in the time you specified.

```
    setInterval(() => {
	    console.log("This is a setInterval \n");
    }, 1000);
```

## I/O Queue

Most of the 'async' methods from build in modules are from I/O Queue

```
    fs.readFile()
```

## Check Queue

Check queue is just straightforward it has method setImmediate that is dispatching after I/O Queue because of I/O polling

```
setImmediate(() => {
	console.log("This is a setImmediate #1\n");
});
```
