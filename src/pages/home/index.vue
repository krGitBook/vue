<template>
  <div style="padding:30px;">home</div>
</template>
<script>
export default {
   beforeRouteEnter(to, from, next) {
    console.log("组件内 beforeRouteEnter");

    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("组件内 beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("组件内 beforeRouteLeave",this.$route.path);
    next();
  },
   data(){
     return {

     }
   },
   watch: {
    '$route' (to, from) {

    }
  }
}
</script>
<style lang="scss">

</style>
