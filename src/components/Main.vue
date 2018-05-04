<template>
  <div id="main">
    <div id="china-map"></div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  mounted () {
    // eslint-disable-next-line
    const myChart = echarts.init(document.getElementById('china-map'))
    const option = {
      title: {
        text: '双一流大学分布',
        left: 'center',
        textStyle: {
          fontSize: 30
        }
      },
      tooltip: {
        formatter: '{b}',
        backgroundColor: '#ff7f50',
        textStyle: {
          color: '#fff'
        }
      },
      visualMap: {
        min: 0,
        max: 5,
        inRange: {
          color: ['#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090']
        },
        show: false
      },
      series: [
        {
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: true,
              textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#ff7f50'
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#800080'
              }
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 0.5,
              borderColor: '#333333',
              areaColor: '#77afd2'
            },
            emphasis: {
              borderWidth: 0.5,
              borderColor: '#666666',
              areaColor: 'rgb(212, 255, 19)'
            }
          },
          tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
              var value = (params.value + '').split('.')
              value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
              return params.seriesName + '<br/>' + params.name + ': ' + value
            }
          },
          data: [
            {name: '安徽', value: 1},
            {name: '澳门', value: 5},
            {name: '北京', value: 2},
            {name: '重庆', value: 1},
            {name: '福建', value: 5},
            {name: '甘肃', value: 0},
            {name: '贵州', value: 5},
            {name: '广东', value: 1},
            {name: '广西', value: 2},
            {name: '河北', value: 1},
            {name: '河南', value: 2},
            {name: '黑龙江', value: 3},
            {name: '湖北', value: 0},
            {name: '湖南', value: 3},
            {name: '海南', value: 4},
            {name: '江苏', value: 2},
            {name: '江西', value: 2},
            {name: '吉林', value: 1},
            {name: '辽宁', value: 4},
            {name: '内蒙古', value: 2},
            {name: '宁夏', value: 5},
            {name: '青海', value: 2},
            {name: '上海', value: 3},
            {name: '山东', value: 4},
            {name: '山西', value: 5},
            {name: '陕西', value: 3},
            {name: '四川', value: 2},
            {name: '天津', value: 4},
            {name: '新疆', value: 3},
            {name: '西藏', value: 5},
            {name: '香港', value: 5},
            {name: '云南', value: 3},
            {name: '台湾', value: 5},
            {name: '浙江', value: 5}
          ]
        }
      ]
    }

    myChart.setOption(option)
    myChart.on('mouseover', function (params) {
      console.log(params)
    })
  }
}

</script>
<style scoped>
#china-map {
  width: 1000px;
  height: 1000px;
  margin: auto;
  color: rgb(212, 255, 19);
}
</style>
