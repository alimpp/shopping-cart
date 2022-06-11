<template>
  <div class="coreRegister">

      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#register">
                Register
        </button>


        <div class="modal fade" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Register in Shopping Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5 class="modal-title" id="exampleModalLabel">Username</h5>
                <input class="form-control" v-model="username" :class="{'error_input':usernameError}"/>
                <p class="danger_color size_c" v-if="usernameError">{{usernameTextError}}</p>
                <h5 class="modal-title" id="exampleModalLabel">Password</h5>
                <input class="form-control" v-model="password" :class="{'error_input':passwordError}"/>
                <p class="danger_color size_c" v-if="passwordError">{{passwordTextError}}</p>
                <button class="btn btn-secondary my-2" @click="register">Register</button>
            </div>
            </div>
        </div>
        </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            username : "" , 
            password : "" , 
            usernameError : false ,
            usernameTextError : "Username Required...!" , 
            passwordError : false , 
            passwordTextError : "Password Required...!"
        }
    } , 
    methods : {
        register(){
            if(this.username.length < 5){this.usernameError = true}else{this.usernameError = false}
            if(this.password.length < 8){this.passwordError = true}else{this.passwordError = false}
        }
    }
}
</script>

<style>

</style>