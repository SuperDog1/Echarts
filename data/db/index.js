const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)

const connect = require('./connect')

const result = connect(async function(table) {
  const dirPath = path.join(__dirname, '../college')
  const dir = await readdir(dirPath)
  for (let f of dir) {
    const { data } = JSON.parse(await readFile(path.join(dirPath, f), 'utf8'))
    if (data[0]) {
      const college = {
        id: data[0].college_id,
        name: data[0].name,
        type: data[0].type,
        addr: data[0].addr,
        email: data[0].email,
        brief_introduction: data[0].brief_introduction,
        code: data[0].code,
        recruit_website: data[0].recruit_website,
        recruit_tel: data[0].recruit_tel,
        province: data[0].province,
        logo: data[0].logo,
        tuition_fee: data[0].tuition_fee,
        property: data[0].property,
        member_ship: data[0].member_ship,
      }
      table.insert(college)
    }
  }
})
