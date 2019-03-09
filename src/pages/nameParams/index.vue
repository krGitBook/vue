<template>
  <div style="padding:30px;">
    nameParams
    <router-link  :to="{path:'b',query: { type: '123' }}" append>append</router-link>
  </div>
</template>
<script>
export default {
   data(){
     return {

     }
   },
   mounted(){
      var routes=this.$route;
      console.log('rou--nnnnn',routes);
   }
}
</script>
<style lang="scss">

</style>
