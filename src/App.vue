<template>
  <div id="app">
    <el-container>
      <el-header><h2 @click="backToMap">双一流大学</h2></el-header>
      <el-container id="main">
        <el-aside width="260px"><Aside @toCollege="toCollege"/></el-aside>
        <el-main>
          <College :province="province" v-if="!show"/>
          <Main @toCollege="toCollege" v-if="show"/>
        </el-main>
      </el-container>
    </el-container>
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
  }
  #app {
    height: 100%;
  }
  #main {
    margin-top: 60px;
  }
  .el-header {
    position: fixed;
    /*height: 60px;*/
    width: 100%;
    background: white;
    z-index: 100;
    color: #333;
    border-bottom: 1px solid #eee;
    text-align: center;
  }
  .el-aside {
    position: fixed;
    top: 60px;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .el-main {
    margin-left: 260px;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
