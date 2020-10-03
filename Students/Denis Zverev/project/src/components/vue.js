let app_catalog = new Vue({
    el: '#app_catalog',
    data:{
            catalogItems: [],
            basketItems: [],
            catalogUrl: 'https://raw.githubusercontent.com/xorrou1/responses/master/JSON%20carts%20marcet/catalog.json' ,
            basketUrl: 'https://raw.githubusercontent.com/xorrou1/responses/master/JSON%20carts%20marcet/basket.json' ,
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json());
        },
        async  add(){
            try {
                this.catalogItems = await this.get(this.catalogUrl);
                this.basketItems = await this.get(this.basketUrl);
                this.basketItems = this.basketItems.contents
            }
            finally {
                console.log(this.catalogItems);
                console.log(this.basketItems)
            }
        }
    }           
})

let app = new Vue({

}) 