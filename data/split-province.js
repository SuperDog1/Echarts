const fs = require('fs')
const path = require('path')

const map_data = JSON.parse(fs.readFileSync(path.join(__dirname, 'map-data.json'), 'utf8'))
const area = JSON.parse(fs.readFileSync(path.join(__dirname, 'area.json'), 'utf8'))

//for (let a of area) {
  //const children = a.children.map(c => c.label)
  //const area_data = map_data.filter(c => children.includes(c.properties.name))
  //fs.writeFileSync(path.join(__dirname, 'area-map', a.label + '.js'), JSON.stringify(area_data))
//}
for (let a of area.map(a => a.label)) {
  console.log(a)
}

