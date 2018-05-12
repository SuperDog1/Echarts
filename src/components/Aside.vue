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
import province from './province.json'
export default {
  name: 'Aside',
  data () {
    return {
      activeTab: '区域省份',
      labels: ['区域省份', '高校类型', '学科专业'],
      tabData: [{
        label: '华东',
        children: [
          { label: '安徽', children: [] },
          { label: '福建', children: [] },
          { label: '江苏', children: [] },
          { label: '山东', children: [] },
          { label: '上海', children: [] },
          { label: '浙江', children: [] },
        ],
      }, {
        label: '华南',
        children: [
          { label: '广东' },
          { label: '广西', children: [{ label: '广西大学' }] },
          { label: '海南' },
        ],
      }, {
        label: '华中',
        children: [{}],
      },  {
        label: '华北',
        children: [{}],
      },  {
        label: '西北',
        children: [{}],
      },  {
        label: '西南',
        children: [{}],
      },  {
        label: '东北',
        children: [{}],
      },  {
        label: '台港澳',
        children: [{}],
      }],
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

