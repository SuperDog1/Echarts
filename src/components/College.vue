<template>
  <div class="college-container">
    <h2>合肥工业大学</h2>
    <div class="intro card">
      <div class="logo-container">
        <img class="logo card" src="http://ormuxuvyx.bkt.clouddn.com/college/logo/63.jpg" alt="">
      </div>
      <ul class="left">
        <li>高校类型： <span class="c211">211</span></li>
        <li>高校隶属于：教育部</li>
        <li>高校所在地：安徽</li>
        <li>院士：2人 博士点：83个 硕士点：31个</li>
      </ul>
      <ul class="left">
        <li>学校地址：安徽省合肥市包河区屯溪路193号</li>
      　<li>联系电话：0551-62901096，0551-62905427</li>
        <li>电子邮箱：<a href="">hfutzb@hfut.edu.cn</a></li>
      　<li>学校网址：<a href="">www.hfut.edu.cn/ch/</a></li>
      </ul>
    </div>
    <div class="chart-card card">
    </div>
  </div>
</template>
<script>
export default {
  name: 'College',
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
    width: 100%;
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
  .chart-card {
    width: 924px;
    height: 400px;
  }
  .card {
    border: 1px solid rgba(89, 89, 89, 0.48);
  }
</style>



option = {
    title: {
        text: '年龄情况',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['1994','1995', '1996','1997','1998']
    },
    series : [
        {
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
            }
        }
    ]
};


option = {
  title: {
      text: '男女比',
      left: 'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      // orient: 'vertical',
      // top: 'middle',
      bottom: 10,
      left: 'center',
      data: ['男','女']
  },
  series : [
      {
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
      }
  ]
};


//折线图
option = {
    
xAxis: {
        
type: 'category',
        
data: ['2012','2013','2014', '2015', '2016', '2017',]
    },
    
yAxis: {
        type: 'value'
    },
    
series: [{
        
data: [3000, 3120, 3050, 3150, 2950, 3030, ],
       
 type: 'line'
    }]
};


//柱状图(省份招生）
option = {
    xAxis: {
        type: 'category',

        data: ['天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','陕西','甘肃','青海','宁夏','其他',]
    },
   
 yAxis: {
        type: 'value'
    },
    
series: [{
        data: [18, 73, 90, 46, 17, 28, 23，46,532,65,98,59,191,87,73,39,88，16,49,92,62,44,80,92,37,29,180],
        
type: 'bar'
    }]
};

