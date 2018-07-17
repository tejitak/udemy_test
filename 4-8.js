'use strict';
const ccxt = require ('ccxt');

(async function () {
    const config = require('./config')
    let bitflyer = new ccxt.bitflyer (config)

    let result = await bitflyer.privatePostSendparentorder ({
      "order_method": "IFDOCO",
      "minute_to_expire": 10000,
      "time_in_force": "GTC",
      "parameters": [{
        "product_code": "FX_BTC_JPY",
        "condition_type": "LIMIT",
        "side": "BUY",
        "price": 745000,
        "size": 0.01
      },
      {
        "product_code": "FX_BTC_JPY",
        "condition_type": "LIMIT",
        "side": "SELL",
        "price": 745500,
        "size": 0.01
      },
      {
        "product_code": "FX_BTC_JPY",
        "condition_type": "STOP",
        "side": "SELL",
        "trigger_price": 744500,
        "size": 0.01
      }]
    });
}) ();