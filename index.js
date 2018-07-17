const request = require('request')

const asyncFunc = () => {
  return new Promise((resolve) => {
    request('https://yahoo.co.jp', (err, response, body) => {
      resolve(body)
    })
  })
}

// const result = asyncFunc()

// result.then((html) => {
//   console.log('output', html)
// })

async function main () {
  const html = await asyncFunc()
  console.log('output', html)
}

main()