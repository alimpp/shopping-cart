import { ADD_TO_CART , UPDATE_CART , COUNT , GET_CART , 
CLEAR_CART , TOTAL_PRICE , INCREMENT , DECREMENT , INCREMENT_QUANTITY , DECREMENT_QUANTITY , DELETE , DELETE_ITEM } from '../constans/constans'
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
       [GET_CART](state){
         return state.cart
       } ,

       [COUNT](state){
            return state.cart.length
       } , 

       [TOTAL_PRICE](state){
          return state.cart.reduce((total , product) => {
            return total + product.price * product.quantity
          }, 0 )
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
        } , 
        [CLEAR_CART](state){
            localStorage.removeItem('cart')
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Cart Clear',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
            })
            return state.cart = []
        } , 
        [INCREMENT_QUANTITY](state , id){
            const item = state.cart.find(product => product.id == id)
            if(item){
                item.quantity++
            }
            updateLocalStorage(state.cart)
        } , 
        [DECREMENT_QUANTITY](state , id){
            const item = state.cart.find(product => product.id == id)
            if(item){
                if(item.quantity > 1){
                    item.quantity--
                }
            }
            updateLocalStorage(state.cart)
        } , 
        [DELETE_ITEM](state , id){
            state.cart = state.cart.filter(cart => cart.id != id)
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
       } , 
       [INCREMENT]({commit} , id){
            commit('INCREMENT_QUANTITY' , id)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Product Updated',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
            })
       } , 
       [DECREMENT]({commit} , id){
            commit('DECREMENT_QUANTITY' , id)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Product Updated',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
            })
       } , 
       [DELETE]({commit} , id){
            commit('DELETE_ITEM' , id)
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Product Deleted',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 4000
            })
       }
    },
}

export default Cart