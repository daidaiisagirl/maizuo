<template>
  <div class="page-home">
<!----一级路由首页----->
  <router-view></router-view>
  <ul>
  <router-link to="/films">电影</router-link>
  <router-link to="/cinemas">影院</router-link>
  <router-link to="/center">个人中心</router-link>
  </ul>
  </div>
</template>
