import Vue from "vue";
import App from "./App.vue";
import VueFullpage from "fullpage-vue";
import "fullpage-vue/src/fullpage.css";
import "animate.css";
import "@/styles/style.scss";

Vue.use(VueFullpage);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
