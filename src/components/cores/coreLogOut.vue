<template>
   <button class="btn btn-danger" @click="logOut">Log Out</button>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    methods : {
        logOut(){
               Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'User Log Out',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
                })
            return this.$store.commit('LOGOUT')
        }
    }
}
</script>

<style>

</style>