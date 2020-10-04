import {
  Catalog
} from "./catalog";
import {
  cart
} from "./basket.js";

export default () => {
  // if (document.querySelector('.b-basket')) {
  //   let b = new cart();
  // } else {
  //   let a = new Catalog();
  // };


  var catalog = new Vue({
    el: '#catalog',
    data: {
      showCatItem: true,
      catalogUrl: 'https://raw.githubusercontent.com/kulyamzin/GeekBrain/master/Files/GeekBrains/catalog.json',
      items: []
    },
    methods: {
      get(url) {
        return fetch(url).then(d => d.json());
      },
      alert(){ console.log('buy')}
    },
    mounted() {
      this.get(this.catalogUrl).then(items => {
        this.items = items;
      });
    }
  })

}