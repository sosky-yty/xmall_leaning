<template>

</template>
<script>
    import {getCartList, addressList, addressUpdate,addressAdd, addressDel,productDet,submitOrder} from '../../api/goods'
    import YShelf from '../../components/shelf'
    import YButton from '../../components/YButton'
    import YPopup from '../../components/popup'
    import YFooter from '../../common/footer'
    import YHeader from '../../common/header'
    import {getStore} from '../../untils/storage'

export default {
    data(){
        return{
            cartList:[],
            addList:[],
            addressId:'0',
            popupTitle:'管理收货地址',
            popupOpen:false,
            num:'',
            productId:'',
            msg:{
                addressId:'',
                userName:'',
                tel:'',
                streetName:'',
                isDefault:false
            },
            userName:'',
            tel:'',
            streetName:'',
            userId:'',
            orderTotal:0,
            submit:false,
            submitOrder:'提交订单'
        }
    },
    computed:{
        btnHighlight(){
            
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
