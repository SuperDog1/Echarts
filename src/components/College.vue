<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="合肥工业大学" name="first"><Intro v-bind:name='a'/></el-tab-pane>
    <el-tab-pane label="中国科技大学" name="second"><Intro v-bind:name='b'/></el-tab-pane>
  </el-tabs>

</template>
<script>

import Intro from './Intro'

export default {
  name: 'College',
  components: {
    Intro
  },
  data () {
    return {
      activeName: 'first',
      a: '合肥工业大学',
      b: '中国科技大学'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
