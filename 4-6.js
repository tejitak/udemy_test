'use strict';
const ccxt = require ('ccxt');
const config = require('./config')

const bitflyer = new ccxt.bitflyer (config)
const interval = 30000
const records = []

const sleep = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}

(async function () {

  while (true) {
    const ticker = await bitflyer.fetchTicker ('FX_BTC_JPY')
    records.push(ticker.ask)
    if (records.length > 3) {
      records.shift()
    }
    console.log(records)
    if (records[0] < records[1] && records[1] < records[2]) {
      console.log('Price high')
      console.log (bitflyer.id, await bitflyer.createMarketBuyOrder ('FX_BTC_JPY', 0.01))
    }

    await sleep(interval)
  }

}) ();