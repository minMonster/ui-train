<template>
    <div class='route-nav'>
        <!-- v-for 动态渲染 路由列表 -->
        <!-- :class="{active: currentRoute.path === item.path}" 根据当前路由判断 是否添加 active class类 -->
        <!-- toPush 根据点击项 跳转不同路由页 -->
        <span v-for="(item, index) in routers" :class="{active: currentRoute.path === item.path}" @click="toRoute(index)" :key="item.path">{{item.name}}</span>
    </div>
</template>

<script>
  import router from '../../router'
  export default {
    name: 'route-nav',
    data: function () {
      return {
        routers: [], // 路由配置表
        currentRoute: {} // 当前页面路由
      }
    },
    watch: {
      // watch 路由变更 变更 currentRoute
      '$route' (value) {
        this.currentRoute = value
      }
    },
    created () {
      // 获取已注册路由列表 初始化 v-for
      this.routers = router.options.routes;
      // 获取当前路由
      this.currentRoute = this.$route;
    },
    methods: {
      // 根据点击的 tab 跳转路由
      toRoute (index) {
        this.$router.push({name: this.routers[index].name})
      }
    }
  }
</script>

<style>
    .route-nav {
        height: 100px;
        line-height: 100px;
        background-color: #efefef;
    }

    .route-nav span {
        margin: 0 20px;
        cursor: pointer;
    }
    .route-nav span.active {
        color: royalblue;
    }
</style>
