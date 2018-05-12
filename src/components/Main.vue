<template>
  <div class="main">
    <Map />
    <College />
  </div>
</template>
<script>
import Map from './Map.vue'
import College from './College.vue'
export default {
  name: 'Main',
  components: {
    Map,
    College,
  }
}
</script>
<style scoped>
  .main {
    padding: 20px;
    border-left: 1px solid rgba(89, 89, 89, 0.48);
  }
</style>
