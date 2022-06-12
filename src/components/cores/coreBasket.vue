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
           <div class="d-flex">
           <p class="primary_color size_b">Your Cart</p>
           </div>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {

}
</script>

<style>

</style>