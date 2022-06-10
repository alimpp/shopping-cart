<template>
  <div class="singleProduct">
   <div class="container">
    <div class="col-sm-12">
        <div class="card mb-3 animate__animated animate__bounceInRight" style="max-width: 100%;">
        <div class="row g-0">
            <div class="col-md-4">
            <img :src="product.img" class="img-fluid rounded-start" alt="ERROR" style="width:100%; height:35vh;">
            </div>
            <div class="col-md-8">
            <div class="card-body mt-5">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">{{product.title}}</p>
                <p class="dark_color size_c">{{product.price}}</p>
                <coreBtnPrimary :addToCart="addToCart"/>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div class="d-flex animate__animated animate__fadeIn">
      <button class="btn btn-dark" @click="goToHome"><i class="bi bi-house-door-fill px-1"></i>Home</button>
      <button class="btn btn-info mx-2" @click="goToProduct"><i class="bi bi-cart-plus-fill px-1"></i>Product</button>
    </div>
    <div class="col-sm-12 animate__animated animate__fadeIn">
        <coreFooter/>
    </div>
   </div>
  </div>
</template>

<script>
import coreBtnPrimary from '../cores/coreBtnPrimary.vue'
import coreFooter from '../cores/coreFooter.vue'
export default {
    data(){
       return{
        products : [] ,
        product : [] , 
        addToCart : 'Add To Cart'
       }
    } ,
    components : {coreBtnPrimary , coreFooter} ,
    mounted(){
        this.products = this.$store.getters['Products/getProduct']
        this.product = this.products.find(
            p => p.id == this.$route.params.id
        )
    } , 
    methods : {
        goToHome(){
            return this.$router.push('/')
        } , 
        goToProduct(){
            return this.$router.push('/product')
        }
    }
    
}
</script>

<style>

</style>