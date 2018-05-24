<template>
  <div class="main">
    <div class="breadcrumb">
      <span
        class="breadcrumb-item"
        v-for="page in pages"
        :key="page.key"
        @click="handleCrumbClick(page.key)"
      >
        <span>{{pageNames[page.key]}}</span>
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
    <Map
      v-if="pages[pages.length - 1].key === 'map'"
      @changePage="changePage"
    />
    <CollegeList
      v-if="pages[pages.length - 1].key === 'college-list'"
      @changePage="changePage"
      :provance="pages[pages.length - 1].data"
    />
    <College
      v-if="pages[pages.length - 1].key === 'college'"
      :college="pages[pages.length - 1].data"
    />
  </div>
</template>
<script>
import Map from './Map.vue'
import College from './College.vue'
import CollegeList from './CollegeList.vue'
export default {
  name: 'Main',
  components: {
    Map,
    College,
    CollegeList,
  },
  data() {
    return {
      pageNames: {
        'map': '首页',
        'college-list': '大学列表',
        'college': '大学'
      },
      pages: [{ key: 'map', data: null }],
    }
  },
  methods: {
    handleCrumbClick: function(key) {
      const array = []
      for (let page of this.pages) {
        array.push(page)
        if (page.key === key) break
      }
      this.pages = array
    },
    changePage: function(page, props) {
      this.pages.push({ key: page, data: props })
    }
  }
}
</script>
<style scoped>
  .main {
    padding: 20px;
    border-left: 1px solid rgba(89, 89, 89, 0.48);
  }
  .breadcrumb {
    border-bottom: 1px solid rgba(89, 89, 89, 0.48);
    font-size: 16px;
    padding-left: 18px;
    padding-bottom: 12px;
    margin-bottom: 18px;
    color: #adb7ad;
  }
  .breadcrumb-item {
    margin-right: 6px;
  }
  .breadcrumb-item span {
    cursor: pointer;
  }
  .breadcrumb-item span:hover {
    color: #fff
  }
  .breadcrumb-item:last-child,
  .breadcrumb-item:last-child:hover {
    color: #fff;
  }
  .breadcrumb-item:last-child i {
    display: none;
  }
</style>
