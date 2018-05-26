const fs = require('fs')
const path = require('path')

const map_data = JSON.parse(fs.readFileSync(path.join(__dirname, 'map-data.json'), 'utf8'))
const area = JSON.parse(fs.readFileSync(path.join(__dirname, 'area.json'), 'utf8'))

/* const china_map = {
  china: map_data
}

for (let a of area) {
  const children = a.children.map(c => c.label)
  const area_data = map_data.filter(c => children.includes(c.properties.name))
  china_map[a.label] = area_data
}

fs.writeFileSync(path.join(__dirname, 'china-map.json'), JSON.stringify(china_map))
 */

console.log(area.map(a => a.label))

