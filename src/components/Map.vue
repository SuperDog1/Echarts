<template>
  <div id="map">
    <div id="china-map"></div>
  </div>
</template>

<script>
import province_color from '../common/province-color.json'
export default {
  name: 'Map',
  mounted () {
    // eslint-disable-next-line
    const myChart = echarts.init(document.getElementById('china-map'), '', {width: 960, height: 760})
    const option = {
      title: {
        text: '双一流大学地域分布',
        left: 'center',
        textStyle: {
          fontSize: 20,
          color: '#fff',
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
              return ''
            }
          },
          data: province_color,
        }
      ]
    }
    // 处理点击事件并且跳转到相应的页面
    myChart.on('click', (params) => {
       this.$emit('changePage', 'college-list', params.name)
    })
    myChart.setOption(option)
    myChart.on('mouseover', function (params) {
      //console.log(params)
    })
  }
}

</script>
<style scoped>
#china-map {
  width: 960px;
  height: 760px;
  margin: auto;
  color: rgb(212, 255, 19);
}
</style>
