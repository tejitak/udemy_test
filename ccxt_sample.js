'use strict';
const ccxt = require ('ccxt');

(async function () {
    const config = require('./config')
    let bitflyer = new ccxt.bitflyer (config)

    // console.log (bitflyer.id,    await bitflyer.loadMarkets ())

    // console.log (bitflyer.id,  await bitflyer.fetchTicker ('FX_BTC_JPY'))

    // console.log (bitflyer.id, await bitflyer.fetchBalance ())

    // sell 1 BTC/USD for market price, sell a bitcoin for dollars immediately
    // console.log (bitflyer.id, await bitflyer.createMarketSellOrder ('FX_BTC_JPY', 0.01))

    // buy 1 BTC/USD for $2500, you pay $2500 and receive ฿1 when the order is closed
    console.log (bitflyer.id, await bitflyer.createLimitBuyOrder ('FX_BTC_JPY', 0.01, 746000))

    // pass/redefine custom exchange-specific order params: type, amount, price or whatever
    // use a custom order type
    // bitflyer.createLimitSellOrder ('BTC/USD', 1, 10, { 'type': 'trailing-stop' })
}) ();