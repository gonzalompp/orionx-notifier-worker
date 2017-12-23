const start = (seconds,execute) => {
  //execute process
  execute();

  //start timer
  setTimeout(function() {
      start(seconds,execute);
  }, seconds*1000)
};

module.exports = {
  start: start
};
