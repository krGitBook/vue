<template>
  <div style="padding:30px;">pathQuery</div>
</template>
<script>
export default {
   data(){
     return {

     }
   },
   mounted(){
      var routes=this.$route.query;
      console.log('rou--',routes);
   }
}
</script>
<style lang="scss">

</style>
