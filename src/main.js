import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './scripts/semanticui/semantic.css'


Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
    watch:{
        $route () {
            window.scrollTo(0, 0);
        },
        darkTheme() {
            localStorage.setItem("darkTheme", this.$data.darkTheme);
        }
    },
    data : {
        darkTheme: false
    },
    beforeMount(){
        if (localStorage.getItem("darkTheme") === "true") {
            this.$data.darkTheme = true;
        }
    }
}).$mount('#app')
