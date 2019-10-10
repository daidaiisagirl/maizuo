<template>
  <div class="page-home">
<!----一级路由首页----->
  <router-view></router-view>
  <ul class="navBar">
  <router-link to="/films" tag="li">
  <i class="iconfont icon-yingyuan"></i>
  <span>电影</span>
 </router-link>
  <router-link to="/cinemas" tag="li">
  <i class="iconfont icon-dianying"></i>
  <span>影院</span>
  </router-link>
  <router-link to="/center" tag="li">
  <i class="iconfont icon-wode"></i>
  <span>个人中心</span>
  </router-link>
  </ul>
  </div>
</template>
<style lang="scss">
@import './../../assets/common/mixins.scss';
.page-home{
  height: 100%;
  display: flex;
  flex-direction: column;

  >div:first-child{
    flex: 1;
    overflow-y: auto;
  }
}
.navBar{
  @include border-top;
  display: flex;
  height: 50px;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    text-align: center;
    i {
    margin-bottom: 10px;
    font-size: 24px;
    }
    span{
      font-size:12px;
    }
    &.router-link-active {
     color: red;
    }
  }
}
</style>
