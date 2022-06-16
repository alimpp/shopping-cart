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
  
           <h5 class="card-title">Your Cart</h5>
           
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">6000$</h5>
                    <div class="d-flex">
                      <button class="btn btn-dark">+</button>
                      <h6 class="pt-2 px-2">10</h6>
                      <button class="btn btn-dark">-</button>
                    </div>
                    <h5 class="pt-2 card-title">Sub Total</h5>
                    <h6>150000$</h6>
                  </div>
                </div>
              </div>
            </div>

            <hr>
            <div class="d-flex">
               <button class="btn btn-danger">Clear Cart</button>
               <h5 class="card-title px-5 pt-2">Total</h5>
               <h5 class="card-title pt-2">15000$</h5>
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