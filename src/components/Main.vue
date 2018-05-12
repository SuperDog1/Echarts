<template>
  <div class="main">
    <College />
  </div>
</template>
<script>
import College from './College.vue'
export default {
  name: 'Main',
  components: {
    College,
  }
}
</script>
<style scoped>
  .main {
    padding: 20px;
  }
</style>
