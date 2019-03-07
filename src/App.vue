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

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .login-class {
    width: 100%;
    height: 100%;
    background: url("~common/image/login/back.png") no-repeat;
    background-size: cover;
    overflow: auto;
  }
  .container {
    position: absolute;
    left: 180px;
    top: 60px;
    bottom: 0;
    right: 0;
    overflow: auto;
    &.not-menu {
      top: 0;
      left: 0;
    }
  }
  .not-show-sidebar{
    left:0;
  }

}
  .open-token{
    .ivu-modal-header{
      border-bottom:none;
    }
    .ivu-modal-footer{
      border-top:none;
    }
  }
  .noFooter {
    .ivu-modal-footer {
      padding: 0;
      border: none;
    }
  }
.metting-timeline .reservation-introduction .ivu-poptip-rel {
  width: 100%;
  height: 100%;
}

#app .menu-box {
  position: fixed;
  width: 100%;
  height: 100%;
}
.ivu-poptip-popper.v-transfer-dom {
  .appoint-detail-content {
    .title {
      span {
        color: #499DF1;
      }
    }
  }
}
/*更多样式*/
.moreOptionTable {
  .ivu-table {
    overflow: visible;
    .ivu-table-body {
      overflow: visible;
      td .ivu-table-cell {
        overflow: inherit;
      }
    }
  }
}
/*需要换行的ToolTip*/
.ivu-tooltip.wrapTip {
  .ivu-tooltip-content .ivu-tooltip-inner {
    max-width: 500px;
    white-space: normal
  }
}
.ivu-modal-confirm-body {
  word-wrap: break-word;
}
  .ivu-modal-body {
    word-break: break-all;
  }
</style>
