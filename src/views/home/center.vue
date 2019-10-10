<template>
  <div class="page-center">
<!----一级路由个人中心页面----->
<h1>个人中心页面</h1>
<p v-if="userInfo.username">{{ userInfo.username}}</p>
<router-link to="/login" v-else>登录</router-link>
<router-link to="/balance">余额</router-link>
  </div>
</template>
<script>
export default {
  name: 'Center',
  data () {
    let userInfo = window.localStorage.getItem('userinfo')
    return {
      userInfo: userInfo ? JSON.parse(userInfo) : { }
    }
  }
}
</script>
