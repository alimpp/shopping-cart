<template>
  <div class="coreLogin">
     
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login">
                Login
        </button>


        <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Login in Shopping Cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5 class="modal-title" id="exampleModalLabel">Username</h5>
                <input class="form-control" v-model="username" :class="{'error_input':usernameError}"/>
                <p class="danger_color size_c" v-if="usernameError">{{usernameTextError}}</p>
                <h5 class="modal-title" id="exampleModalLabel">Password</h5>
                <input class="form-control" v-model="password" :class="{'error_input':passwordError}"/>
                <p class="danger_color size_c" v-if="passwordError">{{passwordTextError}}</p>
                <button class="btn btn-primary my-2" @click="doLogin">Login in</button>
            </div>
       
            </div>
        </div>
        </div>

  </div>
</template>

<script>
import Swal from 'sweetalert2'
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
        doLogin(){
            let isDone = true
            if(this.username.length < 5){isDone = false , this.usernameError = true}else{this.usernameError = false}
            if(this.password.length < 8){isDone = false , this.passwordError = true}else{this.passwordError = false}
            if(isDone){
                Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Login is Done',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
                })
                this.$router.push('/')
            }
        }
    }
}
</script>

<style>

</style>