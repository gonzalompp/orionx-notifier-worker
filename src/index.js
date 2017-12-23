const orionWorker = require("./workers/orionx");
const timer = require("./utils/timer");

//start the worker
timer.start(5,orionWorker.execute);
