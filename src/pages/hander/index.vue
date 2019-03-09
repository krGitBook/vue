<template>
  <div class="content">
    <router-link  to="/">other</router-link>

    <router-link  to="/home">home</router-link>
    <router-link  to="login" append>login</router-link>
    <router-link

      :to="{name:'login',params: { type: '123' }}"
    >loginParamswwwwww</router-link>
    <!-- <router-link

      :to="{name:'login',params: { type: '456' }}"
    >loginParamseeee</router-link> -->
    <!-- <router-link

      :to="{path:'login',query: { type: 'query' }} "
    >loginQuery</router-link>
    <router-link

      :to="{name:'login',query: { type: 'name' }}"
    >loginName</router-link>
    <router-link

      :to="{name:'login',query: { type: 'replace' }}"
      replace
    >loginReplace</router-link>
    <router-link

      :to="{name:'login',query: { type: 'li' }}"
      tag="li"
      @click="liClick"
    >loginLi</router-link>
    <router-link

      :to="{name:'login',query: { type: 'event' }}"
      @click="liClick"
      event="mouseover"
    >loginEvent</router-link> -->
  </div>
</template>
<script>
export default {
  methods: {
    liClick() {
      console.log("--------");
    }
  }
};
</script>
<style lang="scss">
.class-active {
  color: red;
}
.content {
  padding: 30px;
  font-size: 16px;
}
.class-active-a{
  color:pink;
}
</style>
