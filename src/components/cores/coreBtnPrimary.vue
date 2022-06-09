<template>
  <div class="coreBtnPrimary">
      <button type="button" class="btn btn-primary">
        <span v-if="home">{{getStarted}}</span>
      </button>
  </div>
</template>

<script>
export default {
   data(){
     return{
        home : this.$route.name , 
     }
   } ,
   props : ['getStarted']
}
</script>

<style>

</style>