<template>
  <div class="list-container">
    <h2>{{province}}的双一流高校</h2>
    <div class="item-container" @click="changePage(college.name)" v-for="college in list" :key="college.name">
      <div class="intro card">
        <h3 class="name">{{college.name}}</h3>
        <div class="flex">
        <div class="logo-container">
          <img class="logo" :src="college.logo" alt="">
        </div>
        <ul class="left">
          <li>高校类型：{{college.type}}</li>
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CollegeList',
  props: ['college', 'province'],
  data() {
    return {
      list: [],
    }
  },
  methods: {
    changePage(name) {
      this.$emit('changePage', 'college', name)
    }
  },
  created() {
    this.list = this.college.filter((c) => c.province === this.province)
    this.list.sort((a, b) => a.level - b.level)
    this.$bus.$on("selected-change", (array) => {

    })
  }
}
</script>
<style scoped>
  h2 {
    margin: 0;
  }
  .intro {
    padding: 12px;
    max-width: 900px;
    margin: 16px 0;
  }
  .item-container {
    width: 920px;
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
  .flex {
    display: flex;
  }
  .name {
    margin: 6px;
  }
</style>
