<template>
  <div class="coreHeader">

      <div class="brand">
        <router-link to="/" class="navbar-brand mx-2 mt-3">Shopping Cart</router-link>
        <coreBasket/>
        <span class="systemBadge mt-3">{{countCartItem}}</span>
      </div>

      <div class="login-register-box d-flex">
        <coreLogin class="mt-3 mx-2"/>
        <coreRegister class="mt-3 mx-2"/>
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
.coreHeader{
   width: 100%;
   height: 50px;
   display: flex;
}
.brand{width: 50%; display: flex; justify-content: left;}
.login-register-box{width: 50%; display: flex; justify-content: right;}
</style>