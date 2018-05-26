<template>
  <div class="college-container">
    <h2>{{college.name}}</h2>
    <div class="intro card">
      <div class="logo-container">
        <img class="logo" :src="college.logo" alt="">
      </div>
      <ul class="left">
        <li>高校类型： <span class="c211">{{college.type}}</span></li>
        <li>高校隶属于：{{college.memberShip}}</li>
        <li>高校所在地：{{college.province}}</li>
        <li>院士：--人 博士点：--个 硕士点：--个</li>
      </ul>
      <ul class="left">
          <li>学校地址：{{college.addr}}</li>
        　<li>联系电话：{{college.tel}}</li>
          <li>电子邮箱：<a :href="'mailto:' + college.email">{{college.email}}</a></li>
        　<li>学校网址：<a :href="college.website">{{college.website}}</a></li>
      </ul>
    </div>
    <div class="brief-intro card">
      <h3>简明介绍</h3>
      <p>{{college.brief}}</p>
      <p>{{college.fee}}</p>
    </div>
    <div class="chart-card card">
      <h3>学生情况</h3>
      <div class="flex">
        <div id="age-chart"></div>
        <div id="proportion-chart"></div>
      </div>
    </div>
    <div class="chart-card card">
      <h3>历届招生人数</h3>
      <div id="number-chart"></div>
    </div>
    <div class="chart-card card">
      <h3>面向省份招生人数</h3>
      <div id="histogram-chart"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'College',
  props: ['college'],
  mounted() {
    const age_chart = this.$echarts.init(document.getElementById('age-chart'))
    const age_option = {
      title: {
        text: '年龄情况',
        left: 'center',
        textStyle: { color: '#fff' }
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['1994','1995', '1996','1997','1998'],
        textStyle: { color: '#fff' },
      },
      series : [{
        type: 'pie',
        radius : '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data:[
          {value:1548,name: '1996'},
          {value:535, name: '1997'},
          {value:510, name: '1994'},
          {value:634, name: '1998'},
          {value:735, name: '1995'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      }]
    }
    age_chart.setOption(age_option)

    const proportion_chart = this.$echarts.init(document.getElementById('proportion-chart'))
    const proportion_option = {
      title: {
        text: '男女比',
        left: 'center',
        textStyle: { color: '#fff' }
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['男','女'],
        textStyle: { color: '#fff' },
      },
      series : [{
        type: 'pie',
        radius : '65%',
        center: ['50%', '50%'],
        selectedMode: 'single',
        data:[
          {value:1548,name: '男'},
          {value:535, name: '女'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    }
    proportion_chart.setOption(proportion_option)

    const number_chart = this.$echarts.init(document.getElementById('number-chart'))
    const number_option = {
      xAxis: {
        type: 'category',
        data: ['2012','2013','2014', '2015', '2016', '2017',],
        axisLabel: { color: '#fff' },
      },
      yAxis: {
        type: 'value',
        // boundaryGap: true,
        scale: true,
        axisLabel: { color: '#fff' },
      },
      series: [{
        data: [3000, 3120, 3050, 3150, 2950, 3030, ],
        type: 'line'
      }]
    }
    number_chart.setOption(number_option)

    const histogram_chart = this.$echarts.init(document.getElementById('histogram-chart'))
    const histogram_option = {
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
    histogram_chart.setOption(histogram_option)
  },
}
</script>
<style scoped>
  h2 {
    margin: 6px;
    font-size: 24px;
  }
  .intro {
    padding: 12px;
    display: flex;
    max-width: 900px;
    margin: 16px 0;
  }
  .logo-container {
    height: 150px;
    width: 150px;
  }
  .logo {
    height: 144px;
    width: 144px;
    padding: 3px;
    border-radius: 3px;
  }
  .intro ul {
    margin: 0 16px 0 0;
  }
  .intro li {
    list-style: none;
    margin: 12px 0;
  }
  .intro li > a {
    color: #aaa;
  }
  .brief-intro {
    padding: 12px;
    margin-bottom: 16px;
  }
  .chart-card {
    padding: 12px;
    margin-bottom: 16px;
  }
  h3 {
    margin: 0;
    text-align: center;
    font-size: 20px;
  }
  .card {
    border: 1px solid rgba(89, 89, 89, 0.48);
    max-width: 900px;
    width: 100%;
  }
  .flex {
    display: flex;
  }
  #age-chart {
    width: 420px;
    height: 420px;
  }
  #proportion-chart {
    width: 420px;
    height: 420px;
  }
  #number-chart {
    width: 860px;
    height: 420px;
  }
  #histogram-chart {
    width: 860px;
    height: 420px;
  }
</style>
