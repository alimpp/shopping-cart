<template>
  <div class="productDC">
      <div class="container animate__animated animate__fadeIn">
          <div class="row">
              <div class="col-lg-4" v-for="data in getData" :key="data.id">
                
                    <div class="card mb-3 cardHover" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <a class="link" :href="`/product/${data.id}`">
                        <img :src="data.img" class="img-fluid rounded-start" alt="ERROR" style="width:100%;">
                        </a>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <a class="link" :href="`/product/${data.id}`"><p class="dark_color size_b">{{data.name}}</p></a>
                            <a class="link" :href="`/product/${data.id}`">
                            <p class="dark_color size_x">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                            </a>
                            <a class="link" :href="`/product/${data.id}`">
                            <div class="d-flex">
                            <p class="dark_color size_b">{{data.price}}$</p>
                            <div class="d-flex mt-2 mx-2">
                                <i class="bi bi-star-fill" style="color:yellow;"></i>
                                <i class="bi bi-star-fill" style="color:yellow;"></i>
                                <i class="bi bi-star-fill" style="color:yellow;"></i>
                                <i class="bi bi-star-fill" style="color:yellow;"></i>
                                <i class="bi bi-star-fill" style="color:yellow;"></i>
                            </div>
                            </div>
                            </a>
                            <coreBtnPrimary @click="addCart(data)" :addToCart="addToCart"/>
                        </div>
                        </div>
                    </div>
                    </div>
               
              </div>
          </div>
          <router-view></router-view>
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
           addToCart : 'Add To Cart'
        }
    } ,
    methods : {
       addCart(data){
         return this.$store.dispatch('Cart/ADD_TO_CART' , data)
       }
    } ,
    computed : {
       getData(){
          return this.$store.getters['Products/getProduct']
       }
    } ,
    components : {coreBtnPrimary , coreFooter} ,
   
}
</script>

<style>

</style>