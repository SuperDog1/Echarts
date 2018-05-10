<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="college in colleges" :key="college.name" :label="college.name" :name="college.name">
      <Intro :college='college'/>
    </el-tab-pane>
  </el-tabs>

</template>
<script>

import Intro from './Intro'

export default {
  name: 'College',
  props: {
    province: String
  },
  components: {
    Intro
  },
  data () {
    return {
      activeName: '',
      colleges: []
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  mounted () {
    this.$fetch('/schools', {province: this.province}).then(res => {
      this.colleges = res.data;
      this.activeName = this.colleges[0].name
    });
  }
}
</script>
