<template>
  <div class="list-container">
    <h2>安徽省的双一流高校</h2>
    <div @click="changePage" v-for="college in list" :key="college.name">
      <div class="intro card">
        <div class="logo-container">
          <img class="logo" :src="college.logo" alt="">
        </div>
        <ul class="left">
          <li>高校类型： <span class="c211">211</span></li>
          <li>高校隶属于：教育部</li>
          <li>高校所在地：安徽</li>
          <li>院士：2人 博士点：83个 硕士点：31个</li>
        </ul>
        <ul class="left">
          <li>学校地址：{{college.addr}}</li>
        　<li>联系电话：0551-62901096，0551-62905427</li>
          <li>电子邮箱：<a href="">hfutzb@hfut.edu.cn</a></li>
        　<li>学校网址：<a href="">www.hfut.edu.cn/ch/</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CollegeList',
  data() {
    return {
      list: [
        {name: '合肥工业大学', logo: 'http://ormuxuvyx.bkt.clouddn.com/college/logo/63.jpg', addr: '安徽省合肥市包河区屯溪路193号'},
        {name: ''},
        {name: ''},
      ],
    }
  },
  methods: {
    changePage() {
      this.$emit('changePage', 'college')
    }
  }
}
</script>
<style scoped>
  h2 {
    margin: 0;
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
  .card {
    border: 1px solid rgba(89, 89, 89, 0.48);
    max-width: 900px;
    width: 100%;
  }
  .card:hover {
    border: 2px solid #fff;
  }
</style>
