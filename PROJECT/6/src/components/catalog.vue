<template>
  <div id="catalog">
      <div class="feturedItems w-100 d-flex flex-wrap justify-content-around">
            <Item 
                v-for="item of items" 
                :key="item.productId"
                :item="item"
            />
      </div>
  </div>
</template>

<script>
import Item from './item.vue'
export default {
    components: { Item },
    data() {
        return {
            items: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
        }
    },
    methods: {
        _get(url) {
            return fetch(url).then(d => d.json())
        },
    },
    mounted() {
        this._get(this.url).then(items => { this.items = items });

        console.log(this)
        console.log(this.$parent)
        console.log(this.$root)
    }
}
</script>

<style>

</style>