<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">我的操作台</el-menu-item>
<!--    <el-submenu index="2">-->
<!--      <template slot="title">市级部门</template>-->
<!--&lt;!&ndash;      <p>市级部门</p>&ndash;&gt;-->
<!--    </el-submenu>-->
<el-menu-item index="2">市级部门</el-menu-item>
    <el-submenu index="3">
      <template slot="title">区县部门</template>
      <el-submenu index="3-1">
        <template slot="title">区</template>
        <el-menu-item index="3-1-1">翠屏区</el-menu-item>
        <el-menu-item index="3-2-2">叙州区</el-menu-item>
        <el-menu-item index="3-3-3">南溪区</el-menu-item>
      </el-submenu>
      <el-submenu index="3-2">
        <template slot="title">县</template>
        <el-menu-item index="3-2-1">江安县</el-menu-item>
        <el-menu-item index="3-2-2">长宁县</el-menu-item>
        <el-menu-item index="3-2-3">高县</el-menu-item>
        <el-menu-item index="3-2-4">珙县</el-menu-item>
        <el-menu-item index="3-2-5">兴文县</el-menu-item>
        <el-menu-item index="3-2-6">屏山县</el-menu-item>
        <el-menu-item index="3-2-7">筠连县</el-menu-item>
      </el-submenu>
    </el-submenu>
<!--    <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
<!--    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
  </el-menu>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
