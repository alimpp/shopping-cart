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
                <p class="danger_color size_x" v-if="usernameError">{{usernameTextError}}</p>

                <h5 class="modal-title" id="exampleModalLabel">Email</h5>
                <input class="form-control" v-model="email" :class="{'error_input':emailError}"/>
                <p class="danger_color size_x" v-if="emailError">{{emailTextError}}</p>

                <h5 class="modal-title" id="exampleModalLabel">Password</h5>
                <input class="form-control" v-model="password" :class="{'error_input':passwordError}"/>
                <p class="danger_color size_x" v-if="passwordError">{{passwordTextError}}</p>

                <button class="btn btn-secondary my-2" @click="register">Register</button>

            </div>
            </div>
        </div>
        </div>

  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            username : "" , 
            password : "" , 
            email : "" , 
            usernameError : false ,
            usernameTextError : "Username Required...!" , 
            passwordError : false , 
            passwordTextError : "Password Required...!" , 
            emailError : false , 
            emailTextError : "EmailRequired...!" , 
        }
    } , 
    methods : {
        register(){
            let isDone = true 
            if(this.username.length < 5){isDone = false , this.usernameError = true}else{this.usernameError = false}
            if(this.email.length < 5){isDone = false , this.emailError = true}else{this.emailError = false}
            if(this.password.length < 8){isDone = false , this.passwordError = true}else{this.passwordError = false}
             if(isDone){
                axios.post(`https://api.freerealapi.com/auth/register/` , {name : this.username , email : this.email , password : this.password})
                .then( response => {
                this.$router.push('/product')
                Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Register is Done',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
                })
                this.username = "" ,
                this.email = "" , 
                this.password = ""
                })
                .catch(
                    // need alert for user
                )
            }
        }
    }
}
</script>

<style>

</style>