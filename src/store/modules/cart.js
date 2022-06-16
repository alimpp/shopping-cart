import { ADD_TO_CART , UPDATE_CART , COUNT } from '../constans/constans'
import Swal from 'sweetalert2'

function updateLocalStorage(cart){
    localStorage.setItem('cart' , JSON.stringify(cart))
}

const Cart = {
    namespaced : true ,
    state: {
      cart : localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] ,
    },
    getters: { 
      [COUNT](state){
         return state.cart.length
      }
    },
    mutations: {
        [UPDATE_CART](state , data){
            const item = state.cart.find(product => product.id == data.id)
            if(!item){
                 state.cart.push({
                    ...data , 
                    quantity : 1
                }) 
            }else{
                item.quantity ++
            }
            updateLocalStorage(state.cart)
        }
    },
    actions: {
       [ADD_TO_CART]({commit} , data){
            commit('UPDATE_CART' , data)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Product Added',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
            })
       }
    },
}

export default Cart