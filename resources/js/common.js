import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            // siteUri: 'http://bookingmarket.localhost/',
            selectdata:'',


        }
    },
    mounted(){
       
    },
    computed: {
        ...mapGetters({
            authUser:'getAuthUser',
            isLoggedIn:'isLoggedIn',
         

        }),
    },
    filters:{
		toFixedNum(num){
			
			return num.toFixed(2)
		}
	},
    methods: {
        /**
         *
         * @param {*} method, call method
         * @param {*} url , api url
         * @param {*} dataObj, payload
         */
        async callApi(method, url, dataObj) {
            try {

                let data = await axios({
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    method: method,
                    url: '/app/' + url,
                    data: dataObj
                })
                return data

            } catch (e) {

                return e.response
            }
        },

        i(msg, i = 'Hey!') {
            this.$Notice.info({
                title: i,
                desc: msg
            });
        },
        s(msg, i = 'Great!') {
            this.$Notice.success({
                title: i,
                desc: msg
            });
        },
        w(msg, i = 'Hi!') {
            this.$Notice.warning({
                title: i,
                desc: msg
            });
        },
        e(msg, i = 'Oops!') {
            this.$Notice.error({
                title: i,
                desc: msg
            });
        },
        swr() {
            this.$Notice.error({
                title: 'Oops',
                desc: 'Something went wrong, please try again later'
            });
        },
        ns(title) {
            this.$Message.success(title);
        },
        ni(title) {
            this.$Message.info(title);
        },
        nw(title) {
            this.$Message.warning(title);
        },
        ne(title) {
            this.$Message.error(title);
        },
        nswr() {
            this.$Message.error('Something went wrong, please try again later');
        },


        //  REMOVING ITEMS FROM CART
        removeItem(id, i){
            this.$store.commit('user/removeItem', i)
            var cartData = this.$ls.get('myCart')
            cartData = JSON.parse(cartData)
            cartData.splice(i,1)
            this.$ls.set('myCart', JSON.stringify(cartData))
            this.$store.commit('user/updateCart', cartData)
            this.s('Item removed from cart')
        },
        //  Removing all items from cart
        removeAll(){
            this.$ls.set('myCart', [])
            this.$store.commit('user/removeAll',[])
        },
        // Add item to cart
        async addToCart(p){

            p.quantity=1
            // GET THE ITEM FIRST IF THERE ARE ANY
            var oldCartData = this.$ls.get('myCart')
            // console.log('common addToCart')
            // console.log(p)
            if(!oldCartData){
                this.$ls.set('myCart', JSON.stringify([p]))
                this.$store.commit('user/updateCart', [p])
                // this.s('Položka byla úspěšně přidána')
                this.s('Item added to cart')
            }else{
                // item is already push
                var storedData= JSON.parse(oldCartData)
                for(let i in storedData){
                    if(storedData[i].id===p.id){
                        // p.quantity++
                        storedData[i].quantity++
                        const res = await this.callApi('get',`checkStock?id=${storedData[i].id}&stock=${storedData[i].quantity}`)
                        if(res.status !== 202){
                            return this.i('Out of Stock!!')
                        }
                        this.$ls.set('myCart', JSON.stringify(storedData))
                        this.$store.commit('user/updateCart', storedData)
                        return this.s('Item added to cart')
                    // return this.i('Položka je již přidána v košíku :) ')
                    }
                }
                // console.log('p')
                // console.log(p)
                storedData.push(p)
                // assign the new data
                this.$ls.set('myCart', JSON.stringify(storedData))
                this.$store.commit('user/updateCart', storedData)
                // this.s('Položka byla úspěšně přidána')
                this.s('Item added to cart')
            }
        },


        addItemNQuantityToCart(p, quantity){
            p.quantity=quantity
            // GET THE ITEM FIRST IF THERE ARE ANY
            var oldCartData = this.$ls.get('myCart')
            // console.log('common addToCart')
            // console.log(p)
            if(!oldCartData){
                this.$ls.set('myCart', JSON.stringify([p]))
                this.$store.commit('user/updateCart', [p])
                // this.s('Položka byla úspěšně přidána')
                this.s('Item added to cart')
            }else{
                // item is already push
                var storedData= JSON.parse(oldCartData)
                for(let i in storedData){
                    if(storedData[i].id===p.id){
                        // p.quantity++
                        storedData[i].quantity+= quantity
                        this.$ls.set('myCart', JSON.stringify(storedData))
                        this.$store.commit('user/updateCart', storedData)
                        return this.s('Item added to cart')
                    // return this.i('Položka je již přidána v košíku :) ')
                    }
                }
                // console.log('p')
                // console.log(p)
                storedData.push(p)
                // assign the new data
                this.$ls.set('myCart', JSON.stringify(storedData))
                this.$store.commit('user/updateCart', storedData)
                // this.s('Položka byla úspěšně přidána')
                this.s('Item added to cart')
            }
        },


        async addQuantity(p,index,qu = 1){
            // GET THE ITEM FIRST IF THERE ARE ANY
           
            var oldCartData = this.$ls.get('myCart')
            var storedData= JSON.parse(oldCartData)
            if(qu == 1){
                storedData[index].quantity++
            }
            else storedData[index].quantity = qu
            const res = await this.callApi('get',`checkStock?id=${storedData[index].id}&stock=${storedData[index].quantity}`)
            if(res.status !== 202){
                return this.i('Out of Stock!!')
            }
            this.$ls.set('myCart', JSON.stringify(storedData))
            this.$store.dispatch('user/updateCart', storedData)
            return
        },
        removeQuantity(p,index){
            // GET THE ITEM FIRST IF THERE ARE ANY
            var oldCartData = this.$ls.get('myCart')
            var storedData= JSON.parse(oldCartData)

            if (storedData[index].quantity<2) {
                return
            }
            storedData[index].quantity--
            this.$ls.set('myCart', JSON.stringify(storedData))
            this.$store.dispatch('user/updateCart', storedData)
            return
        },

        getCartItems(){
            var cartData = this.$ls.get('myCart')
            // console.log(cartData)
            if (!cartData) {
                return
            }
            let allCartData = JSON.parse(cartData)
            this.$store.dispatch('user/updateCart', allCartData) 
        },

    }
}
