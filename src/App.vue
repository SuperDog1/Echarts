<template>
  <div id="app">
    <header class="header">
      <h1>双一流大学</h1>
      <input type="text" name="search" id="search" placeholder="请输入需查询的学校...">
    </header>
    <section id="main">
      <Aside />
      <Main />
    </section>
  </div>
</template>
<script>
import Aside from './components/Aside'
import Main from './components/Main'
import College from './components/College'

export default {
  name: 'App',
  components: {
    Aside,
    Main,
    College
  },
  data () {
    return {
      province: '',
      show: true
    }
  },
  methods: {
    toCollege(province) {
      this.province = province
      this.show = false
    },
    backToMap() {
      this.show = true
    }
  }
}
</script>
<style>
  body {
    margin: 0;
    padding: 0;
    background: #353535;
    color: #fff;
  }
  #app {
    height: 100%;
    padding: 20px 48px;
  }
  .header {
    height: 80px;
    background: #353535;
    color:#adb7be;
    z-index: 100;
    border-bottom: 1px solid rgba(89,89,89,0.48);
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    margin: 0;
    line-height: 80px;
  }
  #search {
    background: rgba(0, 0, 0, 0);
    border: 0px solid rgba(0, 0, 0, 0);
    font-size: 22px;
    color: #fff;
    width: 400px;
  }
  #main {
    display: flex;
  }
</style>
