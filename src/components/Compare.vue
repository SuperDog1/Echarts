<template>
  <div class="container" v-show="selected.length !== 0">
    <div class="chart-card">
      <h3>学校排名</h3>
      <div id="rank-chart"></div>
    </div>
    <div class="chart-card">
      <h3>招生人数</h3>
      <div id="number-chart"></div>
    </div>
    <div class="chart-card">
      <h3>男女比例</h3>
      <div id="proportion-chart"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Compare',
  data() {
    return {
      selected: [],
    }
  },
  created() {
    this.$bus.$on("selected-change", (array) => {
      this.selected = array
    })
  },
  mounted() {
    const rank_chart = this.$echarts.init(document.getElementById('rank-chart'))
    const rank_option = {
      tooltip : {
        trigger: 'axis'
      },
      toolbox: {
        show : true,
        feature : {
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true},
        }
      },
      calculable : true,
      xAxis: {
        type: 'category',
        axisLabel: { color: '#fff' },
        data: ['天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','陕西','甘肃','青海','宁夏','其他',]
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#fff' },
      },
      series: [{
        name: '',
        data: [18, 73, 90, 46, 17, 28, 23,46,532,65,98,59,191,87,73,39,88,16,49,92,62,44,80,92,37,29,180],
        type: 'bar'
      }]
    }
    rank_chart.setOption(rank_option)

    const number_chart = this.$echarts.init(document.getElementById('number-chart'))
    const number_option = {
      xAxis: {
        type: 'category',
        axisLabel: { color: '#fff' },
        data: ['天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','陕西','甘肃','青海','宁夏','其他',]
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#fff' },
      },
      series: [{
        data: [18, 73, 90, 46, 17, 28, 23,46,532,65,98,59,191,87,73,39,88,16,49,92,62,44,80,92,37,29,180],
        type: 'bar'
      }]
    }
    number_chart.setOption(number_option)

    const proportion_chart = this.$echarts.init(document.getElementById('proportion-chart'))
    const proportion_option = {
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['男生','女生'],
        textStyle: { color: '#fff' },
      },
      toolbox: {
        show : true,
        feature : {
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true},
        }
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
          axisLabel: { color: '#fff' },
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel: { color: '#fff' },
        }
      ],
      series : [
        {
          name:'男生',
          type:'bar',
          barGap: 0,
          data:[0.66, 0.53, 0.88, 0.36,0.74,0.54, 0.63, 0.47, 0.58, 0.75, 0.80, 0.27],
        },
        {
          name:'女生',
          type:'bar',
          data:[0.34,0.47,0.12, 0.64,0.26, 0.46, 0.37, 0.53,0.42, 0.25, 0.2, 0.73],
        }
      ]
    }
    proportion_chart.setOption(proportion_option)
  },
}
</script>
<style scoped>
  .chart-card {
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid rgba(89, 89, 89, 0.48);
    max-width: 900px;
    width: 100%;
  }
  h3 {
    margin: 0;
    text-align: center;
    font-size: 20px;
  }
  #rank-chart {
    width: 860px;
    height: 420px;
  }
  #number-chart {
    width: 860px;
    height: 420px;
  }
  #proportion-chart {
    width: 860px;
    height: 420px;
  }
</style>
