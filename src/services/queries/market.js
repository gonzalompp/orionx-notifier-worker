module.exports = {
  stats: `{
  market(code: "CHACLP") {
    lastTrade {
      price
    }
  }
  marketCurrentStats(marketCode: "CHACLP", aggregation: d1) {
    open
    close
    high
    low
    variation
    volume
    average
    count
  }
  marketOrderBook(marketCode: "CHACLP", limit: 1) {
    spread
    buy {
      amount
      limitPrice
      accumulated
      accumulatedPrice
    }
    sell {
      amount
      limitPrice
      accumulated
      accumulatedPrice
    }
  }
}`
};
