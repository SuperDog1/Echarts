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
    <div class="selected" v-if="selectedArea.length || selectedType.length || selectedMajor.length">
      <span class="tag-title">已选关键字：</span>
      <el-tag
        v-for="tag in [...selectedArea, ...selectedType, ...selectedMajor]"
        :key="tag"
        closable
        @close="handleCloseTag(tag)"
        size="small"
      >
        {{tag}}
      </el-tag>
    </div>
    <el-tree
      ref="tree"
      :data="tabData"
      :props="defaultProps"
      node-key="label"
      @node-click="handleNodeClick"
      :render-after-expand="false"
      show-checkbox
      @check="handleCheck"
      :default-checked-keys="[...selectedArea, ...selectedType, ...selectedMajor]"
    />
  </div>
</template>
<script>
import area from '../common/area.json'
import major from '../common/major.json'
import type from '../common/type.json'

const TAB_DATA = {
  '区域省份': area,
  '高校类型': type,
  '学科专业': major,
}

export default {
  name: 'Aside',
  data () {
    return {
      activeTab: '区域省份',
      labels: ['区域省份', '高校类型', '学科专业'],
      tabData: area,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectedArea: [],
      selectedType: [],
      selectedMajor: [],
    }
  },
  methods: {
    changeTab(label) {
      this.activeTab = label
      this.tabData = TAB_DATA[label]
    },
    handleCloseTag(label) {
      switch (this.activeTab) {
        case '区域省份': {
          this.selectedArea = this.selectedArea.filter((o) => o !== label)
          break
        }
        case '高校类型': {
          this.selectedType = this.selectedType.filter((o) => o !== label)
          break
        }
        case '学科专业': {
          this.selectedMajor = this.selectedMajor.filter((o) => o !== label)
        }
      }
      this.$refs.tree.setCheckedKeys([
        ...this.selectedArea,
        ...this.selectedType,
        ...this.selectedMajor
      ])
    },
    handleNodeClick(data) {
      console.log(data)
    },
    handleCheck(_, data) {
      const { checkedKeys } = data
      switch (this.activeTab) {
        case '区域省份': {
          this.selectedArea = checkedKeys
          break
        }
        case '高校类型': {
          this.selectedType = checkedKeys
          break
        }
        case '学科专业': {
          this.selectedMajor = checkedKeys
        }
      }
      this.$bus.$emit('selected-change', [
        this.selectedArea,
        this.selectedType,
        this.selectedMajor,
      ])
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
  .selected {
    color: #adb7ad;
    font-size: 13px;
    border-bottom: 1px solid rgba(89, 89, 89, 0.48);
    padding: 6px;
  }
  .tag-title {
    line-height: 2.5;
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
  .el-tag {
    background: rgba(89, 89, 89, 0.1);
    color: #adb7ad;
    border-color: rgba(89, 89, 89, 0.48);
    margin: 3px;
  }
  .el-tag .el-icon-close {
  	color: #adb7ad;
  }
  .el-tag .el-icon-close:hover {
    background: rgba(89, 89, 89, 0.7);
  }
</style>

