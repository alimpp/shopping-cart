<template>
  <div class="coreBtnPrimary">
      <button type="button" class="btn btn-primary">
        <span v-if="home">{{getStarted}}</span>
        <span v-if="product">{{addToCart}}</span>
      </button>
  </div>
</template>

<script>
export default {
   data(){
     return{
        home : this.$route.name , 
        product : this.$route.name , 
     }
   } ,
   props : ['getStarted' , 'addToCart']
}
</script>

<style>

</style>