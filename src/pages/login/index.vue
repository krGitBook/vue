<template>
  <h1>{{name}} <router-view/></h1>
  
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
      name: ''
    }
  },
   watch: {
    '$route' (to, from) {
      let type = 'login-';
      if(to.query.type){
         type+= to.query.type
      }
      if(to.params.type){
         type+= to.params.type
      }
      this.name = type
      // console.log(to,from)
    }
  }

}
</script>
<style lang="scss">

</style>
