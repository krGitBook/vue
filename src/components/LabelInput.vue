<template>
  <div>
    {{label}}
    <input type="text"
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners">
  </div>
</template>
<script>
export default {
  // inheritAttrs:false,
  props:{
    label:{
      default:'',
      type:String
    },
    value:{
      default:'',
      type:String
    }
  },

  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      // console.log( this.$listeners,"jjjj")
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        {
          input: function (event) {
            console.log("input")
            vm.$emit('input', event.target.value)
          },
          keyup:()=>{
            console.log("keyup")
          }
        }
      )
    }
  },
  mounted(){
    console.log(this.$attrs)
  }
}
</script>
<style lang="scss" scoped>

</style>

