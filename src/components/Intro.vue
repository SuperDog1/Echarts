<template>
  <el-card class="box-card">
    <div class="card-header">
      <img :src="college.logo" height="70"/>
      <span>{{college.name}}</span>
    </div>
    <div class="text item">
      <li>{{hash.type}} : {{college.type}}</li>
      <li>{{hash.addr}} : <span class="addr">{{college.addr}}</span></li>
      <li>{{hash.email}} : {{college.email}}</li>
      <li>{{hash.brief}} : <span class="brief">{{college.brief}}</span></li>
      <li>{{hash.code}} : {{college.code}}</li>
      <li>{{hash.website}} : <a :href="college.website">{{college.website}}</a> </li>
      <li>{{hash.tel}} : {{college.tel}}</li>
      <li>{{hash.province}} : {{college.province}}</li>
      <li>{{hash.fee}} : <span class="fee">{{college.fee}}</span></li>
    </div>  
  </el-card>
</template>

<script>
export default {
  name: 'Intro',
  props: ['college'],
  data () {
    return {
      hash: {name: '名称', type: '学院类型', addr: '地址', email: '邮箱', brief: '简介', code: '学校代码', website: '站点', tel: '电话', province: '所在省份', fee: '学费信息'}
    }
  }
}
</script>

<style>
  .card-header span {
    font-size: 25px;
    line-height: 25px;
    vertical-align: center; 
    font-weight: bold;
    margin-left: 8px;
  }
  .text {
    font-size: 14px;
    padding: 5px;
    margin-top: 15px;
  }
  .text li {
    list-style: none;
    padding: 0;
    margin-bottom: 10px;
  }
  .brief, .fee {
    line-height: 20px;
  }
  .addr {
    color: chocolate;
  }

  .box-card {
    width: 480px;
  }
</style>
