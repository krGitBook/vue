<template>
  <div class="content">
    <router-link  to="/"> home</router-link>
    <router-link  :to="{path:'login',params: { type: 'params' }}"> loginParams</router-link>
    <router-link  :to="{path:'login',query: { type: 'query' }}"> loginQuery</router-link>
    <router-link  :to="{name:'login',query: { type: 'name' }}"> loginName</router-link>
    <router-link  :to="{name:'login',query: { type: 'replace' }}" replace> loginReplace</router-link>

  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.content{
  padding: 30px;
  font-size: 16px;
}
</style>
