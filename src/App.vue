<template>
  <div id="app">
    <el-container>
      <el-header><h1>双一流大学</h1></el-header>
      <el-container id="main">
        <el-aside width="260px"><Aside/></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './components/Aside'

export default {
  name: 'App',
  components: {
    Aside
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
  .el-header {
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
