<template>
   <div class="coreBasket">
      
      <button
        class="btn"
        style="margin:5px 5px;"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBackdrop"
        aria-controls="offcanvasWithBackdrop"
      >
        <i class="bi bi-basket" style="font-size:30px;"></i>
      </button>

  <div
      class="offcanvas offcanvas-end navigation"
      tabindex="-1"
      id="offcanvasWithBackdrop"
      aria-labelledby="offcanvasWithBackdropLabel"
      style="border:none; color:#fafafa;"
    >
      <div class="offcanvas-header">
        
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style="color:#fafafa;"
        ></button>
      </div>
        <div class="offcanvas-body dark_color">
  
            <div class="card mb-3" v-for="data in getData" :key="data.id">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="data.img" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{data.name}}</h5>
                    <h5 class="card-title">{{data.price}}$</h5>
                    <div class="d-flex">
                      <button class="btn btn-dark" @click="increment(data.id)">+</button>
                      <h6 class="pt-2 px-2">{{data.quantity}}</h6>
                      <button class="btn btn-dark" @click="decrement(data.id)">-</button>
                    </div>
                    <h5 class="pt-2 card-title">Sub Total</h5>
                    <div class="d-flex">
                      <h6 class="pt-1">{{data.price * data.quantity}}$</h6>
                      <i class="bi bi-trash-fill size_c px-2 pointer" @click="deleteItem(data.id)"></i>
                    </div>
                    <hr>
                  </div>
                </div>
              </div>
            </div>

            <hr>
            
            <div class="d-flex">
               <button class="btn btn-danger" @click="clearCart">Clear Cart</button>
               <h5 class="card-title px-5 pt-2">Total</h5>
               <h5 class="card-title pt-2">{{totalPrice}}$</h5>
            </div>

        </div>
      </div>
    </div>
 
</template>

<script>
export default {
    computed : {
      getData(){
        return this.$store.getters['Cart/GET_CART']
      } , 
      totalPrice(){
        return this.$store.getters['Cart/TOTAL_PRICE']
      }
   } , 
   methods : {
    clearCart(){
      return this.$store.commit('Cart/CLEAR_CART')
    } , 
    increment(id){
      return this.$store.dispatch('Cart/INCREMENT' , id)
    } , 
    decrement(id){
      return this.$store.dispatch('Cart/DECREMENT' , id)
    } , 
    deleteItem(id){
      return this.$store.dispatch('Cart/DELETE' , id)
    }
   }
}
</script>

<style>

</style>