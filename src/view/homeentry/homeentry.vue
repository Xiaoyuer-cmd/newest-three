<template>
  <div>
    <div>
      <!-- vuex使用 -->
      <usevuex></usevuex>
      <!-- 过滤器filters的使用 -->
      <use_filters></use_filters>
    </div>
  </div>
</template>

<script>
import usevuex from '../study/use_vuex/usevuex.vue'
import use_filters from '../study/use_filters/use_filters'
export default {
  components: {
    usevuex,
    use_filters,
  },
  created() {},
  mounted() {},
}
</script>

<style>
</style>