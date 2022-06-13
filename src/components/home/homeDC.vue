<template>
  <div class="homeDC">
      <div class="container">

           <div class="row my-5">
              <div class="col-sm-6">
                  <img src="./img/shop.png" class="img animate__animated animate__fadeIn" alt="error">
              </div>
              <div class="col-sm-6 justify animate__animated animate__fadeIn">
                  <p class="dark_color size_b">Welcome To Shopping Cart</p>
                  <p class="dark_color size_c">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in tempora, voluptates aut nobis numquam. Nisi corrupti delectus ipsum reiciendis rem!</p>
                  <div class="d-flex">
                        <coreBtnPrimary @click="goToHome" :getStarted="getStarted" />
                        <coreLogOut class="mx-1" v-if="this.$store.state.isAuth"/>
                  </div>
              </div>
           </div>

            <div class="row my-5 animate__animated animate__fadeIn" ref="home">
              <div class="col-sm-6 justify">
                  <p class="dark_color size_b">Lorem ipsum dolor...</p>
                  <p class="dark_color size_c">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in tempora, voluptates aut nobis numquam. Nisi corrupti delectus ipsum reiciendis rem!</p>
                  <div>
                       <router-link to="/product" class="btn btn-secondary">Go To Product</router-link>
                  </div>
              </div>
              <div class="col-sm-6">
                  <img src="./img/shopp.jpg" class="img animate__animated animate__fadeIn" alt="error">
              </div>
           </div>

         <coreFooter/>

      </div>
  </div>
</template>

<script>
import coreBtnPrimary from '../cores/coreBtnPrimary.vue'
import coreFooter from '../cores/coreFooter.vue'
import coreLogOut from '../cores/coreLogOut.vue'
export default {
   data(){
       return{
           getStarted : "Get Started" ,
       }
   } ,
   components : {coreBtnPrimary , coreFooter , coreLogOut } , 
   methods : {
       goToHome(){
           const elem = this.$refs.home
           elem.scrollIntoView()
       }
   }
}
</script>

<style scoped > 
.img{width: 100%;}
</style>