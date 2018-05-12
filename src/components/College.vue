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
