<template>
    <div class="app">
      <div class="header">
          <coreHeader/>
      </div>
      <div class="router scrollbar">
          <router-view></router-view>
      </div>
     
    </div>
</template>

<script>
import coreHeader from './components/cores/coreHeader.vue'

export default {
    components : {coreHeader} ,
    watch : {
        $route(){
        this.$store.commit('ONSTART')
        }
     } ,
    mounted(){
        this.$store.commit('ONSTART')
     }
}
</script>

<style scoped >
.app{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 10vh;
}
.router{
    width: 100%;
    height: 90vh;
    overflow: scroll;
    scroll-behavior: smooth;
}

</style>