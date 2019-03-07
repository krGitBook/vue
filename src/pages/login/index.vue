<template>
  <h1>{{name}} </h1>
</template>
<script>
export default {
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
      console.log(to,from)
    }
  }

}
</script>
<style lang="scss">

</style>
