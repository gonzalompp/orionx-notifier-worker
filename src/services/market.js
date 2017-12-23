const axios = require("axios");
const queries = require("./queries/market");

const getMarketStats = () => {
  return new Promise((resolve,reject) => {
    axios.get("https://api.orionx.io/graphql?query="+queries.stats)
    .then(function (response) {
      return resolve({
        lastTradePrice: response.data.data.market.lastTrade.price,
        variation: response.data.data.marketCurrentStats.variation,
        average: response.data.data.marketCurrentStats.average,
        spread: response.data.data.marketOrderBook.spread,
        buyPrice: response.data.data.marketOrderBook.buy[0].limitPrice,
        sellPrice: response.data.data.marketOrderBook.sell[0].limitPrice,
      });
    })
    .catch(function (error) {
      return reject("error :(");
    });
  });
};

module.exports = {
  getMarketStats: getMarketStats
};
