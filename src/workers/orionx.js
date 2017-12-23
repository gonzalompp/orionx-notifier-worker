const marketService = require("./../services/market");

const execute = () => {
  console.log("orionx");

  marketService.getMarketStats().then(result => {
    console.log("Resultado: "+JSON.stringify(result));
  }).catch(err => {
    console.error("Error: "+err);
  });
};

module.exports = {
  execute: execute
};
