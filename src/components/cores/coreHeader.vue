<template>
  <div class="coreHeader">
     <div class="d-flex headerList">
             <coreLogin class="mx-2 my-3"/>
             <coreRegister class="mx-1 my-3"/>
             <div class="d-flex">
               <coreBasket/>
               <span class="systemBadge mt-3" v-if="hiddenCount">{{countCartItem}}</span> 
             </div>
     </div>
  </div>
</template>

<script>
import coreLogin from '../cores/coreLogin.vue'
import coreRegister from '../cores/coreRegister.vue'
import coreBasket from '../cores/coreBasket.vue'
export default {
   data(){
     return{
        hiddenCount : true
     }
   } ,
   components : {coreLogin , coreRegister , coreBasket} , 
   computed : {
    countCartItem(){
        return this.$store.getters['Cart/COUNT']
    }
   } , 
}
</script>

<style scoped>
.headerList{
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>