<template>
  <div id="aside">
    <div class="tabs">
      <a
        class="label"
        v-for="label in labels"
        :key="label"
        :class="{'active-tab': label === activeTab}"
        @click="changeTab(label)">
        {{label}}
      </a>
    </div>
    <el-tree
      :data="tabData"
      :props="defaultProps"
      @node-click="handleNodeClick" />
  </div>
</template>
<script>

export default {
  name: 'Aside',
  data () {
    return {
      activeTab: '区域省份',
      labels: ['区域省份', '高校类型', '学科专业'],
      tabData: ,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
    }
  },
  methods: {
    changeTab(label) {
      this.activeTab = label
    },
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>
<style scoped>
  #aside {
    overflow: hidden;
    min-width: 240px;
    width: 240px;
    height: 100%;
  }
  .tabs {
    height: 54px;
    border-bottom: 1px solid rgba(89, 89, 89, 0.48);
    display: flex;
    align-items: center;
  }
  .label {
    display: block;
    margin: 0 10px;
    text-decoration: none;
    color: #adb7ad;
    cursor: pointer;
    font-size: 14px;
  }
  .label:hover {
    color: #fff;
  }
  .active-tab {
    color: #fff;
    font-size: 16px;
  }
  .el-tree {
    margin-top: 12px;
    background: rgba(0, 0, 0, 0);
  }
</style>
<style>
  .el-tree-node__content {
    height: 42px;
  }
  .el-tree-node__content:hover {
    background-color: rgba(89, 89, 89, 0.1);
  }
  .el-tree-node:focus > .el-tree-node__content {
    background: rgba(89, 89, 89, 0.2);
    color: #fff;
  }
</style>

