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
                  <coreBtnPrimary @click="goToHome" :getStarted="getStarted" />
              </div>
          </div>

          <div class="row animate__animated animate__fadeIn" ref="home">
              <div class="col-sm-4" v-for="data in getData" :key="data.id">
                   <div class="card mb-3" style="max-width: 540px;">
                         <div class="row g-0">
                        <div class="col-md-4">
                        <img :src="data.img" class="img-fluid rounded-start" alt="ERROR" style="width:100%;">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <p class="dark_color size_b">{{data.name}}</p>
                            <p class="dark_color size_z">{{data.title}}</p>
                            <router-link to="/product" class="btn btn-primary">Add To Cart</router-link>
                        </div>
                        </div>
                        </div>
                  </div>
             </div>
          </div>

         <coreFooter/>
         
      </div>
  </div>
</template>

<script>
import coreBtnPrimary from '../cores/coreBtnPrimary.vue'
import coreFooter from '../cores/coreFooter.vue'

export default {
   data(){
       return{
           getStarted : "Get Started" ,
       }
   } ,
   components : {coreBtnPrimary , coreFooter} ,
   computed : {
       getData(){
          return this.$store.getters['Products/filterProduct']
       }
   } , 
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