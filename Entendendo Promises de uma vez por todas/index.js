const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const basePath = './assets/'
const readFileAsync = promisify(fs.readFile)

console.log('Begin');
readFileAsync(path.resolve(basePath, 'invicutus.txt'), {encoding: 'utf-8'})
.then(console.log)
.then(console.log)
.catch(console.error)