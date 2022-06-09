<template>
  <div class="productDC">
      <div class="container animate__animated animate__fadeIn">
          <div class="row">
              <div class="col-sm-4" v-for="data in getData" :key="data.id">
                    <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img :src="data.img" class="img-fluid rounded-start" alt="ERROR" style="width:100%;">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <p class="dark_color size_b">{{data.name}}</p>
                            <p class="dark_color size_x">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                            <div class="d-flex">
                                <p class="dark_color size_b">{{data.price}}</p>
                                <coreBtnPrimary class="mx-2" :addToCart="addToCart"/>
                            </div>
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
           addToCart : 'Add To Cart'
        }
    } ,
    computed : {
       getData(){
          return this.$store.getters['Products/getProduct']
       }
    } ,
    components : {coreBtnPrimary , coreFooter}
}
</script>

<style>

</style>