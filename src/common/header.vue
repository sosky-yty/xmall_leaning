<template>
    
</template>
<script>
import YButton from '/components/YButton'
import {mapMutations,mapState} from 'vuex'
import {getCartList,carDel,getQuickSearch} from '/api/goods'
import {loginOut,navList} from '/api/index'
import {setStore,getStore,removeStore} from 'utils/storage'
import 'element-ui/lib/theme-default/index.css'

export default {
    data(){
        return{
            user:{},
            // 查询数据库的商品
            st:false,
            // 头部购物车显示
            cartShow:false,
            positionL:0,
            positionT:0,
            timerCartShow:null,// 定时隐藏购物车
            input:'',
            choosePage:-1,
            searchResults:[],
            tiemout:null,
            token:'',
            navList:[]
        }
    },
    computed:{
        ...mapState([
            'cartList', 'login', 'receiveInCart', 'showCart', 'userInfo'
        ]),
        totalPrice(){
            var totalPrice = 0
            this.cartLsit && this.cartLsit.forEach(element => {
                totalPrice +=(item.productNum *item.salePrice)
            })
            return totalPrice
        },
        totalNum(){
            var totalNum = 0
            this.cartList && this.cartLsit.forEach(item =>{
                totalNum +=(item.productNum)
            })
            return totalNum
        }
    }
}
</script>

