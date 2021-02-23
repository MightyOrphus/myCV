import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue  } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.mixin({
  methods: {
    hasIcon: function (icon) {
      return !!icon;
    },
  },
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
