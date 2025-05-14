# Node.js Event Loop

[Event loop representation](/assets/event-loop-representation.png)

## MicroTask Queue

MicroTask Queue has 2 built in queues inside of it:

1. NextTick Queue
2. Promise Queue

The rule of MicroTask Queue is that first nextTick callbacks are executed first then the Promise callbacks
_The process.nextTick should be discouraged because it can cause Event Loop starvation._
