(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !==
    'string') {
    // CommonJS
    factory(exports, require('echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
}(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  }
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  if (!echarts.registerMap) {
    log('ECharts Map is not loaded')
    return;
  }
  echarts.registerMap('china', {
    "type": "FeatureCollection",
    "features": [{
      "id": "710000",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@°Ü¯Û"],
          [
            "@@ƛĴÕƊÉɼģºðʀ\\ƎsÆNŌÔĚänÜƤɊĂǀĆĴĤǊŨxĚĮǂƺòƌâÔ®ĮXŦţƸZûÐƕƑGđ¨ĭMó·ęcëƝɉlÝƯֹÅŃ^Ó·śŃǋƏďíåɛGɉ¿@ăƑ¥ĘWǬÏĶŁâ"
          ],
          ["@@\\p|WoYG¿¥Ij@¢"],
          ["@@¡@V^RqBbAnTXeRz¤L«³I"],
          ["@@ÆEEkWqë @"],
          ["@@fced"]
        ],
        "encodeOffsets": [
          [
            [122886, 24033]
          ],
          [
            [123335, 22980]
          ],
          [
            [122375, 24193]
          ],
          [
            [122518, 24117]
          ],
          [
            [124427, 22618]
          ],
          [
            [124862, 26043]
          ]
        ]
      },
      "properties": {
        "cp": [121.509062, 25.044332],
        "name": "台湾",
        "childNum": 6
      }
    }, {
      "id": "810000",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@AlBk"],
          ["@@mn"],
          ["@@EpFo"],
          [
            "@@ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ đhI®æÔtSHnEÒrÈc"
          ],
          ["@@rMUwAS®e"]
        ],
        "encodeOffsets": [
          [
            [117111, 23002]
          ],
          [
            [117072, 22876]
          ],
          [
            [117045, 22887]
          ],
          [
            [116975, 23082]
          ],
          [
            [116882, 22747]
          ]
        ]
      },
      "properties": {
        "cp": [114.173355, 22.320048],
        "name": "香港",
        "childNum": 5
      }
    }, {
      "id": "820000",
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": ["@@kÊd°å§s"],
        "encodeOffsets": [
          [116279, 22639]
        ]
      },
      "properties": {
        "cp": [113.54909, 22.198951],
        "name": "澳门",
        "childNum": 1
      }
    }],
    "UTF8Encoding": true
  });
}));
