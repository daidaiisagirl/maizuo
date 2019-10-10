<template>
  <div class="page-login">
<!----一级路由登录页面----->
<h1>登录页面</h1>
<input type="text" placeholder="用户名" />
<input type="password" placeholder="密码" />

<button @click="handleLogin"> 登录成功</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

  methods: {
    handleLogin () {
      window.localStorage.setItem('userinfo', JSON.stringify({ username: '代代' }))
      let redirect = this.$route.query.redirect || 'films'
      this.$router.replace(redirect)
    }
  }

}
</script>
