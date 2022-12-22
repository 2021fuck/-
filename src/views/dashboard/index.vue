<template xmlns="">
  <div class="dashboard-container">
    <PanelGroup @handleSetLineChartData="handleSetLineChartData" />
    <!--    <div class="dashboard-text">首页</div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from '@/views/dashboard/components/PanelGroup'
export default {
  name: 'Dashboard',
  components: {
    PanelGroup
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
