<template>
  <div class="content">
    <router-link exact-active-class="class-active" to="/"> other</router-link>
    <router-link exact-active-class="class-active" to="/home"> home</router-link>
    <router-link exact-active-class="class-active" to="/login" append>login</router-link>
    <router-link
      exact-active-class="class-active"
      :to="{path:'login',params: { type: 'params' }}"

    >loginParams</router-link>
    <router-link
      exact-active-class="class-active"
      :to="{path:'login',query: { type: 'query' }} "
    >loginQuery</router-link>
    <router-link
      exact-active-class="class-active"
      :to="{name:'login',query: { type: 'name' }}"
    >loginName</router-link>
    <router-link
      exact-active-class="class-active"
      :to="{name:'login',query: { type: 'replace' }}"
      replace
    >loginReplace</router-link>
    <router-link
      exact-active-class="class-active"
      :to="{name:'login',query: { type: 'li' }}"
      tag="li"
    >loginLi</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.class-active {
  color: red;
}
.content {
  padding: 30px;
  font-size: 16px;
}
</style>
