const fs = require('fs')
const path = require('path')
const readFile = require('util').promisify(fs.readFile)

const orm = require('./orm')

module.exports = async function(connection) {
  const table = orm(connection).table('college')

//  await table.drop()
  await table.create()
  // const isEmpty = await table.isEmpty()
  // if (isEmpty) {
  //   console.log('Database is empty. Start to load data...')
  //   const data = await readFile(
  //     path.join(__dirname, '..', 'cache', 'problems.all.json'),
  //     'utf8'
  //   )

  //   console.log('Load successed.')
  // }
}
