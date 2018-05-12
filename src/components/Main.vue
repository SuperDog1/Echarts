<template>
  <div class="main">
    <Map v-if="activePage === 'map'" @changePage="changePage"/>
    <CollegeList v-if="activePage === 'college-list'" @changePage="changePage" :provance="pageProps"/>
    <College v-if="activePage === 'college'" :college="pageProps"/>
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
      activePage: 'map',
      pageProps: '',
    }
  },
  methods: {
    changePage: function(page, props) {
      console.log('ppage')
      this.activePage = page
      this.pageProps = props
    }
  }
}
</script>
<style scoped>
  .main {
    padding: 20px;
    border-left: 1px solid rgba(89, 89, 89, 0.48);
  }
</style>
