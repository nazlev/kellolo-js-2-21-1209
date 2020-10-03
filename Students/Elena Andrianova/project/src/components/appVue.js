const appVue = new Vue({
    el: '#app',
    data:{
        catalogItems: [],
        basketItems: [],
        showCatalog: true,
        showCalc: false, //скрытие и показ корзины)
        catalogUrl: 'https://raw.githubusercontent.com/Alaya95/static/master/JSON/catalog.json',
    },

    methods: {
        get(url) {
            return fetch(url).then(d => d.json())
        },

        buy(item) {
            console.log(item)
            let find = this.basketItems.find(el => el.productId == item.productId);
            if (find) {
                find.amount++;
            } else {
                this.basketItems.push(Object.assign({}, item, { amount: 1 }));
            }
        },

        removeItem(item) {
            let find = this.basketItems.find(el =>  el.productId == item.productId);
            if (find.amount > 1) {
                find.amount--;
            } else {
                this.basketItems.splice(this.basketItems.indexOf(find), 1);
            }
        },
    },

    mounted() {
        this.get(this.catalogUrl)
            .then(catalogItems => {
                this.catalogItems = catalogItems;
                console.log(this.catalogItems);
            })
    },

});
