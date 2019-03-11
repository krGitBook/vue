<template>
  <div style="padding:30px;">nameQuery</div>
</template>
<script>
export default {
   data(){
     return {

     }
   },
   mounted(){
      var routes=this.$route.query;
      console.log('rou-rrrrrr-',routes);
   }
}
</script>
<style lang="scss">

</style>
