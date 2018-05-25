<template>
  <div class="container">
    <h3>
      <span @click="handleToggle">
        <span>双一流大学地域分布图</span>
        <i :class="'el-icon-arrow-down animated ' + (showMap ? 'rotateDown' : 'rotateUp')"></i>
      </span>
    </h3>
    <div id="china-map" :class="(showMap ? 'slideDown' : 'slideUp') + ' animated'"></div>
  </div>
</template>

<script>
import province_color from '../common/province-color.json'
import china_map from '../common/china-map.json'
const option = {
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

export default {
  name: 'Map',
  data() {
    return {
      showMap: true,
      map_chart: null,
    }
  },
  methods: {
    handleToggle() {
      this.showMap = !this.showMap
    },
    changeMap(map_data) {
      console.log("this is very ming brother")
      this.$echarts.registerMap('china', {
        "type": "FeatureCollection",
        "features": map_data,
        "UTF8Encoding": true
      })
    }
  },

  created() {
    this.$bus.$on("selected-change", (array) => {
      this.changeMap(china_map.filter((o) => array.includes(o.properties.name)))
    });
  },

  mounted () {
    this.changeMap(china_map)
    this.map_chart = this.$echarts.init(document.getElementById('china-map'), '', {width: 960, height: 760})
    this.map_chart.on('click', (params) => {
      this.$emit('changePage', 'college-list', params.name)
    })
    this.map_chart.setOption(option)
    this.map_chart.on('mouseover', function (params) {
      //console.log(params)
    })
  }
}

</script>
<style scoped>
  .container {
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid rgba(89, 89, 89, 0.48);
    max-width: 900px;
    width: 100%;
    overflow: hidden;
  }
  h3 {
    margin: 0;
    text-align: center;
    font-size: 20px;
  }
  #china-map {
    overflow: hidden;
    width: 900px;
    margin: auto;
    color: rgb(212, 255, 19);
  }
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  @keyframes rotateDown {
    from { transform: rotate(0deg); }
    to { transform: rotate(180deg); }
  }
  .rotateDown {
    animation-name: rotateDown;
  }
  @keyframes rotateUp {
    from { transform: rotate(180deg); }
    to { transform: rotate(0deg); }
  }
  .rotateUp {
    animation-name: rotateUp;
  }
  @keyframes slideDown {
    from { height: 0; }
    to { height: 700px; }
  }
  .slideDown {
    animation-name: slideDown;
  }
  @keyframes slideUp {
    from { height: 700px; }
    to { height: 0; }
  }
  .slideUp {
    animation-name: slideUp;
  }
</style>
