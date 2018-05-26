<template>
  <div class="container" v-show="selectedArea.length || selectedType.length || selectedMajor.length">
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
import range from 'lodash/range'
export default {
  name: 'Compare',
  props: ['college'],
  data() {
    return {
      selectedArea: [],
      selectedType: [],
      selectedMajor: [],
      rank_chart: null,
      number_chart: null,
      proportion_chart: null
    }
  },
  created() {
    this.$bus.$on("selected-change", (array) => {
      this.selectedArea = array[0]
      this.selectedType = array[1]
      this.selectedMajor = array[2]
      this.changeRankChart()
      this.changeNumberChart()
      this.changeProportionChart()
    })
  },
  methods: {
    changeRankChart() {
      const { college, selectedArea, selectedType, selectedMajor } = this
      const college_data = college
        .filter((c) => selectedArea.length === 0 || selectedArea.includes(c.province))
        .filter((c) => selectedType.length === 0 || selectedType.includes(c.property))

      college_data.sort((a, b) => a.level - b.level)
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
          data: college_data.map(c => c.name),
        },
        yAxis: {
          type: 'value',
          axisLabel: { color: '#fff' },
        },
        series: [{
          name: '',
          data: college_data.map(c => c.level),
          type: 'bar'
        }]
      }
      this.rank_chart.setOption(rank_option)
    },
    changeNumberChart() {
      const { college, selected } = this
      const college_data = college
        .filter((c) => selectedArea.length === 0 || selectedArea.includes(c.province))
        .filter((c) => selectedType.length === 0 || selectedType.includes(c.property))

      college_data.sort((a, b) => a.level - b.level)
      const number_option = {
        xAxis: {
          type: 'category',
          axisLabel: { color: '#fff' },
          data: college_data.map(c => c.name),
        },
        yAxis: {
          type: 'value',
          scale: true,
          axisLabel: { color: '#fff' },
        },
        series: [{
          data: college_data.map(() => Math.floor((Math.random() * 500) + 3000)),
          type: 'bar'
        }]
      }
      this.number_chart.setOption(number_option)
    },
    changeProportionChart() {
      const { college, selected } = this
      const college_data = college
        .filter((c) => selectedArea.length === 0 || selectedArea.includes(c.province))
        .filter((c) => selectedType.length === 0 || selectedType.includes(c.property))

      college_data.sort((a, b) => a.level - b.level)
      const man_proportion = college_data.map(() => ((Math.random() * 0.5) + 0.25).toFixed(2))
      const proportion_option = {
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['男生', '女生'],
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
            data : college_data.map(c => c.name),
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
            data: man_proportion,
          },
          {
            name:'女生',
            type:'bar',
            data: man_proportion.map(v => (1 - v).toFixed(2)),
          }
        ]
      }
      this.proportion_chart.setOption(proportion_option)
    }
  },
  mounted() {
    this.rank_chart = this.$echarts.init(document.getElementById('rank-chart'))
    this.changeRankChart()

    this.number_chart = this.$echarts.init(document.getElementById('number-chart'))
    this.changeNumberChart()

    this.proportion_chart = this.$echarts.init(document.getElementById('proportion-chart'))
    this.changeProportionChart()
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
