import 'bootstrap/dist/css/bootstrap.min.css'
import './layout/styles/styles.css'

import Vue from 'vue'
import Main from './Main.vue'

new Vue({
    render: h => h(Main)
})
.$mount('#app');