<template>
  <div class="coreHeader">
     <div class="d-flex">
         <div class="col-sm-6 d-flex">
            <p class="size_c dark_color px-2 py-3">Cart</p>
         </div>
         <div class="col-sm-6 d-flex headerList">
             <div class="d-flex">
                <span class="systemBadge mt-3" v-if="hiddenCount">{{countCartItem}}</span>
                <coreBasket/>
             </div>
             <coreLogin class="mx-1 my-3"/>
             <coreRegister class="mx-1 my-3"/>
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
    justify-content: right;
}
</style>