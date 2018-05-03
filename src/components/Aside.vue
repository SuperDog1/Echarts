<template>
  <div id="aside">
    <div class="title">省份</div>
    <ul id="list">
      <li v-for="item in province" :key="item">
        <a href="">{{ item }}</a>
      </li>
    </ul>
  </div>
 </template>
<script>
import province from './province.json'
export default {
  name: 'Aside',
  data () {
    return {
      province: province.data
    }
  }
}
</script>
<style scoped>
  #aside {
    overflow: hidden;
  }
  .title {
    border: 1px solid #eee;
    border-right: none;
    padding: 16px 46px;
    font-size: 18px;
    font-weight: 600;
    color: #444;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.1);
    position: fixed;
    top: 60px;
    width: 150px;
    background: white;
  }
  ul {
    margin-top: 80px;
  }
  li {
    list-style-type: none;
    margin: 8px;
  }
  li > a {
    text-decoration: none;
    color: #666;
  }
  li > a:hover {
    color: #409eff;
  }
</style>
