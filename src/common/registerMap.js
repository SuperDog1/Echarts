import china_map from './china-map.json'
import area from './area.json'

export default function(echarts) {
  echarts.registerMap('china', {
    "type": "FeatureCollection",
    "features": china_map.china,
    "UTF8Encoding": true
  })
  for (let a of area) {
    echarts.registerMap(a.label, {
      "type": "FeatureCollection",
      "features": china_map[a.label],
      "UTF8Encoding": true
    })
  }
}
