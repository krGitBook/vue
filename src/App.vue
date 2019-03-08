<template>
  <div id="app">
    <div  class="menu-box">
      <Hander/>
      <router-view/>

    </div>


  </div>
</template>

<script>
import Hander from './pages/hander'
export default {
  components:{
   Hander
  }
}
</script>

