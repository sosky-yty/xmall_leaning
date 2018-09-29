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
        //计算数量
        totalPrice(){
            var totalPrice = 0
            this.cartLsit && this.cartLsit.forEach(element => {
                totalPrice +=(item.productNum *item.salePrice)
            })
            return totalPrice
        },
        //计算价格
        totalNum(){
            var totalNum = 0
            this.cartList && this.cartLsit.forEach(item =>{
                totalNum +=(item.productNum)
            })
            return totalNum
        }
    },
    methods:{
        ...mapMutations(['ADD_CART','INIT_BUYCART','ADD_ANOMATION','SHOW_CART','REDUCE_CART','RECORD_USERINFO','EDIT_CART']),
        handleIconClick(ev) {
            if(this.$route.path === '/search'){
                this.$route.push({
                    path:'/refreshsearch',
                    query:{
                        key: this.input
                    }
                })
            } else{
                this.$route.push({
                    path:'/search',
                    query:{
                        key:this.input
                    }
                })
            }
        },
        showError(m){
            this.$message.error({
                message:m
            })
        },
        //导航栏变化
        changePage(v){
            this.choosePage=v
        },
        changeGoods(v,item){
            this.changePage(v)
            if (v ===-1 ){
                this.$route.push({
                    path:'/'
                })
            }else if(v === -2){
                this.$router.push({
                    path: '/refreshgoods'
                })
            }else{
                if(itme.type === 1){
                    window.location.href = item.fullUrl
                }else {
                    window.open(item.fullUrl)
                }
            }
        },
        loadAll(){
            let params = {
                params :{
                    key:this.input
                }
            }
            getQuickSearch(params).then(res=>{
                if(res === null || res === ''){
                    return
                }
                if(res.error){
                    this.showError(res.error.reason)
                    return
                }
                var array = []
                var maxSize = 5
                if (res.hits.hits.length<=5){
                    maxSize = res.hits.hits.length
                }
                for(var i = 0;i< maxSize; i++){
                    var obj = {}
                    obj.value = res.hits.hits[i]._source.prodectName
                    array.push(obj)
                }
                if(array.length !==0){
                    this.searchResults = array
                }else{
                    this.searchResults = []
                }
            })
        },
        querySearchAsync(queryString, cb){
            if(this.input === undefined){
                cb([])
                return
            }
            this.input = this.input.trim()
            if (this.input === ''){
                cb([])
                return
            }else{
                this.loadAll()
                setTimeout(()=>{
                    cb(this.searchResults)
                },300)
            }
        },
        handledSelect (item){
            this.input = item.value
        },
        //购物车显示
        cartShowState(state){
            this.SHOW_CART({showCart:state})
        },
        _getCartList(){
            getCartList({userId:getStore('userId')}).then(res =>{
                if(res.success ===true){
                    setStore('buyCart',res.result)
                }
            }).then(this.INIT_BUYCART)
        },
        delGoods(prodctId){
            if(this.login){
                carDel({UserId:getStore('userId'),prodctId}).then(res=>{
                    this.EDIT_CART({prodctId})
                })
            }else{
                this.EDIT_CART({producId})
            }
        },
        toCart(){
            this.$router.push({path:'/cart'})
        },
        navFixed(){
            if(this.$route.path === '/goods'|| this.$route.path === '/home' || this.route.path === '/goodsDetails'|| this.$route.path === '/thands'){
                var st = document.documentElement.scrollTop || document.body.scrollTop
                st >= 100 ? this.st = true :this.st = false
                //计算小圆当前位置
                let num = document.querySelector('.num')
                this.positionL = num.getBoundingClientRect().left
                this.positionT = num.getBoundingClientRect().top
                this.ADD_ANIMATION({carPositionL:this.positionL , carPositionT:this.positionT})

            }else{
                return
            }
        },
        //退出登录
        _loginOut(){
            let params = {
                params:{
                    token:this.token
                }
            }
            loginOut(params).then(res=>{
                removeStore('buyCart')
                window.location.href = '/'
            })
        },
        //痛过路由方式改变导航文字样式
        
    }
}
</script>

